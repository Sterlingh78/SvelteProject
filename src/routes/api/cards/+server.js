export async function GET() {
    let query = 'ajani'
    let results
    try {
        const response = await fetch(`https://api.scryfall.com/cards/search?order=cmc&q=${query}`)
        results = await response.json()
    } catch(err) {
        console.log(err)
    }

    return new Response(JSON.stringify(results))
}