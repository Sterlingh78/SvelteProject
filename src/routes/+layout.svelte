<script>
    import { theme } from '../lib/stores/theme.js'
    import { navigating } from '$app/stores';
    import { loading } from '../lib/stores/loading.js'
    import "../app.css";
    import Header from '../lib/components/header/Header.svelte';

    $: $loading = !!$navigating
</script>

<div data-theme={$theme}>
    <Header />


    {#if $loading}
    <!-- loader animation from https://loading.io/css/ -->
    <div class="pageAnimation"><div></div><div></div><div></div></div>
    {/if}
        
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

    .pageAnimation {
        display: block;
        position:absolute;
        z-index: 6;
        top: 50%;
        left: 50%;
        width: 80px;
        height: 80px;
    }
    .pageAnimation div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #fff;
        animation: pageAnimation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .pageAnimation div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    .pageAnimation div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    .pageAnimation div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }
    @keyframes pageAnimation {
    0% {
        top: 8px;
        height: 64px;
    }
    50%, 100% {
        top: 24px;
        height: 32px;
    }
    }
</style>