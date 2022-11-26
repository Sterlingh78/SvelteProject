<script>
    import { onMount } from 'svelte'
    import { flip } from 'svelte/animate'
    import { quintOut } from 'svelte/easing'
    import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	const rotate = tweened(0, {
		duration: 1100,
		easing: cubicOut
	})

    function tweenCard(event) {
        //console.log(event.target)
        $rotate += 0.7
        event.target.style = `transform: rotate(${$rotate}turn)`
    }

    $: cards = []

    function sortCards() {
        const newCards = cards.sort((a, b) => a.name.localeCompare(b.name))
        cards = []
        cards = [...newCards]
    }

    onMount(async () => {
        const res = await fetch('/api/cards')
        const cardList = await res.json()

        cards = [...cardList.data]
    })
</script>

<main>
    <button class="btn btn-primary m-4" on:click={sortCards}>Sort A-Z</button>
    <div class="flex flex-wrap justify-center">
        {#each cards as card (card.id)}
        <div animate:flip="{{delay: 250, duration: 250, easing: quintOut}}" class="card w-96 bg-base-100 drop-shadow-lg m-4">
            <a href={`/cards/${card.id}`}>
            <figure on:click={tweenCard} class="px-10 pt-10">
            <img src={card.image_uris.normal} alt="Shoes" class="rounded-xl" /> 
            </figure>
            </a>
        </div>
        {/each}
    </div>
</main> 