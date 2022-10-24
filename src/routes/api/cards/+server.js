export async function GET() {
    let results
    try {
        const response = await fetch(`https://api.scryfall.com/cards/search?order=cmc&q=urza`)
        results = await response.json()
    } catch(err) {
        console.log(err)
    }

    return new Response(JSON.stringify(results))
}