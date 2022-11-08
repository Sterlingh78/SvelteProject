<script>
    import { credentials } from '../../lib/stores/credentials.js'
</script>

<div>
    <h1 class="font-medium leading-tight text-4xl mt-0 mb-2 ml-4">{$credentials.firstName}'s Profile</h1>
    <div class="m-4 card card-side bg-base-300 shadow-xl">
        <figure><img src="https://placeimg.com/200/200/people" alt="profilepic"/></figure>
        <div class="card-body">
          <h2 class="card-title">{$credentials.firstName} {$credentials.lastName}</h2>
          <p>{$credentials.email}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
</div>