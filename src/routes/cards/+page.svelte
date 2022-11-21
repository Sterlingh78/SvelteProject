<script>
    import { onMount } from 'svelte'
    import { flip } from 'svelte/animate'
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const rotate = tweened(0, {
		duration: 1100,
		easing: cubicOut
	})

    function tweenCard() {
        $rotate += 0.7
    }

    let cards = []

    onMount(async () => {
        const res = await fetch('/api/cards')
        const cardList = await res.json()

        cards = [...cardList.data]
    })

    function removeCard(event) {
        if (event.target.parentNode.id == "button") {
            let button = event.target.parentNode
            let card = button.parentNode
            card.remove()
        } else {
            let svg = event.target.parentNode
            let button = svg.parentNode
            let card = button.parentNode
            card.remove()
        }
    }
</script>

<main class="flex flex-wrap justify-center">
    {#each cards as card}
    <div class="card w-96 bg-base-100 drop-shadow-lg m-4">
        <button on:click={removeCard} id="button" class="w-12 p-2 inline-flex justify-end text-gray-400 hover:text-gray-500">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" id={card.id}>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        <a href={`/cards/${card.id}`}>
        <figure on:click={tweenCard} class="px-10 pt-10">
         <img style="transform: rotate({$rotate}turn)" src={card.image_uris.normal} alt="Shoes" class="rounded-xl" /> 
        </figure>
        </a>
    </div>
    {/each}
</main> 