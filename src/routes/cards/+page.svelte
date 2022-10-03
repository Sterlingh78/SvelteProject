<script>
    export let data;
    let cards = data.data
</script>

<main class="flex flex-wrap justify-center">
    {#each cards as card}
    <div class="card w-96 bg-base-100 drop-shadow-lg m-4">
        <figure class="px-10 pt-10">
         <img src={card.image_uris.normal} alt="Shoes" class="rounded-xl" /> 
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">{card.name}</h2>
        <p>${card.prices.usd}</p>
        <div class="card-actions">
            <a class="btn btn-primary" href="https://www.tcgplayer.com/product/{card.tcgplayer_id}/" target="_blank">Buy On TCGPlayer</a>
        </div>
        </div>
    </div>
    {/each}
</main> 