<script>
	import { goto } from '$app/navigation'
	import { theme } from '../../stores/theme.js'
	import { credentials } from '../../stores/credentials.js'
    let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

	let selectedTheme

	$: if (selectedTheme && selectedTheme !== 'Theme') {
		$theme = selectedTheme
	}

	function logout() {
		$credentials.firstName = ''
		$credentials.lastName = ''
		$credentials.email = ''
	}
</script>
<div class="navbar bg-base-100">
    <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/"><img src="/home.svg" width="30em" alt="home icon"/></a>
        <a class="btn btn-ghost normal-case text-xl" href="/cards">Cards</a>
        <a class="btn btn-ghost normal-case text-xl" href="/news">News Articles</a>
        <a class="btn btn-ghost normal-case text-xl" href="/players">NBA Players</a>
        <a class="btn btn-ghost normal-case text-xl" href="/dashboard">Dashboard</a>
    </div>
    <div class="dropdown dropdown-end">
		<label tabindex="0" class="btn btn-ghost btn-circle avatar m-1" for="userIcon">
			<div class="w-16 rounded-full">
				<img id="userIcon" src="https://placeimg.com/90/90/people" alt="User icon" />
			</div>
		</label>
		<ul
			tabindex="0"
			class="mt-3 p-2 dropdown-content bg-base-300 menu menu-compact shadow w-36"
		>
			{#if $credentials.email !== ''}
			<li><h2>Welcome {$credentials.firstName}!</h2></li>
			<li><a>Profile</a></li>
			<li on:click={logout}><a>Logout</a></li>
			{/if}
			<li><a>Settings</a></li>
			{#if $credentials.email == ''}
            <li><a href="/auth/signup">Sign Up</a></li>
            <li><a href="/auth/login">Log In</a></li>
			{/if}
			<li>
				<select class="select w-full max-x-xs" bind:value={selectedTheme}>
					<option>Theme</option>
					{#each themeOptions as theme}
						<option value={theme}>
							{theme}
						</option>
					{/each}
				</select>
			</li>
		</ul>
	</div>
</div>