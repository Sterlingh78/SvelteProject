<script>
	export let data;
	//let cards = data.results.data;
	console.log(data.results);
</script>

<main>
	<div class="card  w-1/2 bg-base-200 m-auto">
		<figure class="px-10 pt-10">
			{#if data.results.image_uris}
				<img src={data.results.image_uris.normal} alt="card" class="rounded-2xl" />
			{:else}
				<img src={data.results.card_faces[0].image_uris.normal} alt="card" class="rounded-3xl" />
			{/if}
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title">{data.results.name}</h2>
			{#if data.results.prices.usd}
				<p>${data.results.prices.usd}</p>
			{/if}
			<p>{data.results.oracle_text}</p>
			{#if data.results.tcgplayer_id}
				<div class="card-actions">
					<a
						class="btn btn-primary"
						href="https://www.tcgplayer.com/product/{data.results.tcgplayer_id}/"
						target="_blank">Buy On TCGPlayer</a
					>
				</div>
			{/if}
		</div>
	</div>
</main>
