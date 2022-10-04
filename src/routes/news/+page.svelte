<script>
    export let data;
    let articles = data.newsData.articles;
</script>

<main>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <label for="my-drawer" class="btn btn-primary drawer-button">View Articles</label>
      <div class="hero bg-base-200">
      </div>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        {#each articles as article}
        <li><a href={article.url} target="_blank">
          <div class="card shadow-xl image-full">
            <figure><img src={article.urlToImage} alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">{article.title}</h2>
            </div>
          </div>
        </a></li>
        {/each}
      </ul>
    </div>
  </div>
</main> 