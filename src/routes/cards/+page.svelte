<script>
    import { onMount } from 'svelte'
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
        <figure class="px-10 pt-10">
         <img src={card.image_uris.normal} alt="Shoes" class="rounded-xl" /> 
        </figure>
        </a>
    </div>
    {/each}
</main> 