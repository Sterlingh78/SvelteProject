export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const searchTerms = data.get('searchTerms')
        
        try {
            const playersResponse = await fetch(`https://www.balldontlie.io/api/v1/players?search=${searchTerms}`)
            const playersData = await playersResponse.json()
            console.log(playersData)
            return playersData
        } catch (err) {
            console.error(err)
        }
    }
}