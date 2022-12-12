<script>
	import { enhance } from '$app/forms';
	export let form;
	//$: players = form.data
</script>

<main>
	<form method="POST" action="/players" use:enhance>
		<input
			type="search"
			name="searchTerms"
			placeholder="NBA Player Search"
			class="input input-bordered input-lg w-80"
		/>
		<button type="submit" value="Submit" class="btn btn-primary m-1">Submit</button>
	</form>
	<div class="flex flex-wrap justify-center">
		{#if !form}
			<p class="hero min-h-screen">Please Enter Search Terms</p>
		{:else}
			{#each form.data as player}
				<div class="card w-96 bg-neutral text-neutral-content m-4">
					<div class="card-body items-center text-center">
						<h2 class="card-title">{player.first_name} {player.last_name}</h2>
						{#if player.height_feet}
							<h3>Height</h3>
							<p>{player.height_feet} ft. {player.height_inches} inches tall</p>
						{/if}
						<h3>Team</h3>
						<p>{player.team.city}</p>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</main>
