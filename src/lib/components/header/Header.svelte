<script>
	import { goto } from '$app/navigation'
    let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

	function changeTheme(event) {
		let theme = event.target.value
		localStorage.setItem("test",theme)
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
			<li><a>Profile</a></li>
			<li><a>Settings</a></li>
            <li><a href="/auth/signup">Sign Up</a></li>
            <li><a href="/auth/login">Log In</a></li>
			<li>
				<select class="select w-full max-x-xs" on:click={changeTheme}>
					<option>Theme</option>
					{#each themeOptions as theme}
						<option value={theme}>
							{theme}
						</option>
					{/each}
				</select>
			</li>
			<li><a>Logout</a></li>
		</ul>
	</div>
</div>