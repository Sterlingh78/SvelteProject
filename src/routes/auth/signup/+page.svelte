<script>
	import { enhance } from '$app/forms'
	const passwords = {
		first: '',
		confirm: ''
	}
	let button

	$: if (passwords.first !== '') {
		if (passwords.first == passwords.confirm) {
			button.disabled = false
		}
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
	  <div class="text-center lg:text-left">
		<h1 class="text-5xl font-bold">Sign Up</h1>
		<p class="py-6 mt-4">Enter basic information to access this Svelte site. No real information required.</p>
	  </div>
	  <div class="flex-shrink-0 w-full max-w-sm shadow-2xl">
		<form method="POST" action="?/signup" use:enhance>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">First Name</span>
			</label>
			<input type="text" name="fname" required placeholder="first name" class="input input-bordered" />
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Last Name</span>
			</label>
			<input type="text" name="lname" required placeholder="last name" class="input input-bordered" />
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Email</span>
			</label>
			<input type="text" name="email" required placeholder="email" class="input input-bordered" />
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Password</span>
			</label>
			<input type="password" name="password" required placeholder="password" class="input input-bordered" bind:value={passwords.first} />
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Confirm Password</span>
			</label>
			<input type="password" name="confirmPassword" required placeholder="confirm password" class="input input-bordered" bind:value={passwords.confirm} />
		  </div>
		  <div class="form-control mt-4">
			<button class="btn btn-primary" type="submit" disabled bind:this={button}>Login</button>
		  </div>
		</form>
	  </div>
	</div>
  </div>