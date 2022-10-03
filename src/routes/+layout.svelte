<script>
    import "../app.css";
</script>

<div class="navbar bg-base-100">
    <a class="btn btn-ghost normal-case text-xl" href="/"><img src="/home.svg" width="30em" alt="home icon"/></a>
    <a class="btn btn-ghost normal-case text-xl" href="/cards">Cards</a>
</div>
  
<slot />

<footer class="footer footer-center p-4 bg-base-300 text-base-content sticky top-[100vh]">
    <div>
      <p>Copyright © 2022 - Sterling Holt</p>
    </div>
</footer>

<style>
    div.navbar a {
        margin-right: .5rem;
    }
</style>