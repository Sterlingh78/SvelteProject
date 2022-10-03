// @ts-ignore
export async function load({ params, fetch }) {
    const res = await fetch('/api/cards')
    let results = res.json()
    let id = params.cardID
    return {
        results,
        id
    }
}