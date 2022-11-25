<script>
    import { onMount } from 'svelte'
    import { flip } from 'svelte/animate'
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const rotate = tweened(0, {
		duration: 1100,
		easing: cubicOut
	})

    function tweenCard(event) {
        //console.log(event.target)
        $rotate += 0.7
        event.target.style = `transform: rotate(${$rotate}turn)`
    }

    let cards = []

    onMount(async () => {
        const res = await fetch('/api/cards')
        const cardList = await res.json()

        cards = [...cardList.data]
    })
</script>

<main class="flex flex-wrap justify-center">
    {#each cards as card}
    <div class="card w-96 bg-base-100 drop-shadow-lg m-4">
        <a href={`/cards/${card.id}`}>
        <figure on:click={tweenCard} class="px-10 pt-10">
         <img src={card.image_uris.normal} alt="Shoes" class="rounded-xl" /> 
        </figure>
        </a>
    </div>
    {/each}
</main> 