<script>
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const rotate = tweened(0, {
		duration: 1100,
		easing: cubicOut
	});

	function tweenCard(event) {
		//console.log(event.target)
		$rotate += 0.7;
		event.target.style = `transform: rotate(${$rotate}turn)`;
	}

	$: cards = [];
	$: searchQuery = '';

	function sortCards() {
		const newCards = cards.sort((a, b) => a.name.localeCompare(b.name));
		cards = [];
		cards = [...newCards];
	}

	async function searchCards() {
		const res = await fetch(`https://api.scryfall.com/cards/search?order=cmc&q=${searchQuery}`);
		const cardList = await res.json();

		cards = [...cardList.data];
		console.log(cards);
	}

	onMount(async () => {
		const res = await fetch(`https://api.scryfall.com/cards/search?order=cmc&q=urza`);
		const cardList = await res.json();

		cards = [...cardList.data];
		console.log(cards);
	});
</script>

<main>
	<input
		bind:value={searchQuery}
		type="search"
		name="searchTerms"
		placeholder="Card Search"
		class="input input-bordered input-lg w-80 ml-4"
	/>
	<button on:click={searchCards} type="submit" value="Submit" class="btn btn-primary m-1"
		>Submit</button
	>
	<button class="btn btn-primary" on:click={sortCards}>Sort A-Z</button>
	<div class="flex flex-wrap justify-center bg-base-200 m-4 rounded-xl">
		{#each cards as card (card.id)}
			<div animate:flip={{ delay: 250, duration: 250, easing: quintOut }} class="m-2 w-96 ">
				<a href={`/cards/${card.id}`}>
					<figure on:click={tweenCard}>
						{#if card.image_uris}
							<img src={card.image_uris.normal} alt="card" class="rounded-3xl" />
						{:else}
							<img src={card.card_faces[0].image_uris.normal} alt="card" class="rounded-3xl" />
						{/if}
					</figure>
				</a>
			</div>
		{/each}
	</div>
</main>
