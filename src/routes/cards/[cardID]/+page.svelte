<script>
     export let data;
    let cards = data.results.data
    console.log(data)
</script>

<main>
    {#each cards as card}
    {#if card.id == data.id}
    <div class="card w-96 bg-base-100 shadow-xl m-auto">
        <figure class="px-10 pt-10">
          <img src={card.image_uris.normal} alt="card" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{card.name}</h2>
          <p>${card.prices.usd}</p>
          <p>{card.oracle_text}</p>
          <div class="card-actions">
            <a class="btn btn-primary" href="https://www.tcgplayer.com/product/{card.tcgplayer_id}/" target="_blank">Buy On TCGPlayer</a>
          </div>
        </div>
      </div>
    {/if}
    {/each}
</main>