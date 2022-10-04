import { API_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

export async function load() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        const newsData = await response.json()
        return { newsData }
    } catch (err) {
        throw error(404, 'Not found')
    }
}