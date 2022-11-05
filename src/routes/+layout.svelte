<script>
    import { theme } from '../lib/stores/theme.js'
    import "../app.css";
    import Header from '../lib/components/header/Header.svelte';
</script>

<div data-theme={$theme}>

<Header />
  
<slot />

<footer class="footer footer-center p-4 bg-base-300 text-base-content sticky top-[100vh]">
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