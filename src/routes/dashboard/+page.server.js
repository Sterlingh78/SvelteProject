import { NASA_API_KEY } from '$env/static/private'
//https://api.nasa.gov/planetary/apod
export async function load() {
    try {
        const nasa_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=6`)
        return await nasa_response.json()
    } catch (err) {
        console.error(err)
    }
}