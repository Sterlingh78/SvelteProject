<script>
    import { enhance } from '$app/forms'

	const credentials = {
        email: '',
        password: ''
    }
	$: console.log(credentials)
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="card shadow-xl bg-slate-800">
			<form class="card-body" method="POST" action="?/login" use:enhance>
				<div class="form-control">
                    <h1 class="text-4xl font-bold m-4">Log In</h1>
                    <label class="label" for="email">Email Address</label>
					<input
						class="input input-bordered input-lg w-96"
						type="email"
						name="email"
						placeholder="Email"
                        required
                        autocomplete="email"
						bind:value={credentials.email}
					/>
                    <label class="label" for="password">Password</label>
                    <input class="input input-bordered input-lg w-96" type="password" name="password" placeholder="Password" required autocomplete="password" minlength="8" maxlength="80" bind:value={credentials.password}/>
                    <button class="btn btn-primary btn-lg mt-8" type="submit">Submit</button>
				</div>
			</form>
		</div>
	</div>
</div>