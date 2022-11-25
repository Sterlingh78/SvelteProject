<script>
	import { enhance } from '$app/forms'
	import { credentials } from '../../../lib/stores/credentials.js'

	let pass 
	let button
	const userInput = {
		firstName: '',
		lastName: '',
		email: ''
	}

	function setCredentials() {
		console.log("firing")
		$credentials.firstName = userInput.firstName
		$credentials.lastName = userInput.lastName
		$credentials.email = userInput.email
	}

	function validation(event) {
		let value = event.srcElement.value
		if (value !== '') {
		if (value == pass) {
			button.style.display = "inline-flex"
		} else {
			button.style.display = "none"
		}
	}
	}
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
	  <div class="text-center lg:text-left m-4">
		<h1 class="text-5xl font-bold">Sign Up</h1>
		<p class="py-6 mt-4">Enter basic information to access this Svelte site. No real information required.</p>
	  </div>
	  <div class="flex-shrink-0 w-full max-w-sm">
		<form method="POST" action="?/signup" use:enhance>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">First Name</span>
			</label>
			<input type="text" name="fname" required placeholder="first name" class="input input-accent input-bordered" bind:value={userInput.firstName}/>
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Last Name</span>
			</label>
			<input type="text" name="lname" required placeholder="last name" class="input input-accent input-bordered" bind:value={userInput.lastName}/>
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Email</span>
			</label>
			<input type="text" name="email" required placeholder="email" class="input input-accent input-bordered" bind:value={userInput.email}/>
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Password</span>
			</label>
			<input type="password" name="password" required placeholder="password" class="input input-accent input-bordered" bind:value={pass} />
		  </div>
		  <div class="form-control">
			<label class="label">
			  <span class="label-text">Confirm Password</span>
			</label>
			<input type="password" name="confirmPassword" required placeholder="confirm password" class="input input-accent input-bordered" on:input={validation}/>
		  </div>
		  <div class="form-control mt-4">
			<button id="submitBtn" class="btn btn-primary" type="submit" bind:this={button} on:click={setCredentials}>Submit</button>
		  </div>
		</form>
	  </div>
	</div>
  </div>

  <style>
	#submitBtn {
		display: none;
	}
  </style>