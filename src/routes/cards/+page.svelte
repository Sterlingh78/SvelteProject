<script>
    export let data;
    let cards = data.data;
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