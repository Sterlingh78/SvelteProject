export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const searchTerms = data.get('searchTerms')
        console.log("firing")
        
        try {
            const playersResponse = await fetch(`https://www.balldontlie.io/api/v1/players?search=${searchTerms}`)
            const playersData = await playersResponse.json()
            return playersData
        } catch (err) {
            console.error(err)
        }
    }
}