// @ts-ignore
export async function load({ params, fetch }) {
	let id = params.cardID;
	const res = await fetch(`https://api.scryfall.com/cards/${id}`);
	let results = res.json();
	return {
		results
	};
}
