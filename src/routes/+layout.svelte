<script>
    import { theme } from '../lib/stores/theme.js'
    import { navigating } from '$app/stores';
    import { loading } from '../lib/stores/loading.js'
    import "../app.css";
    import Header from '../lib/components/header/Header.svelte';

    $: $loading = !!$navigating
</script>

<div data-theme={$theme}>

<h2>{$loading}</h2>

<Header />
  
<slot />

<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
    <div>
      <p>Copyright © 2022 - Sterling Holt</p>
    </div>
</footer>

</div>

<style>
    div.navbar a {
        margin-right: .5rem;
    }
</style>