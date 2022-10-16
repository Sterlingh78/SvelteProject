<script>
    export let data;
    let articles = data.newsData.articles;
    $: pageContent = {
      img: '',
      title: '',
      body: '',
      url: ''
    }

    function populateContent(event) {
      let id = event.target.id

      for (let i = 0; i < articles.length; i++) {
        if (id == articles[i].url) {
          pageContent.img = articles[i].urlToImage
          pageContent.title = articles[i].title
          let rawContent = articles[i].content
          let cleanedContent = rawContent.slice(0, 150)
          pageContent.body = cleanedContent
          pageContent.url = articles[i].url
        }
      }
    }
</script>

<main>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      {#if pageContent.img == ''}
      <p></p>
      {:else}
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={pageContent.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{pageContent.title}</h2>
          <p>{pageContent.body}</p>
          <div class="card-actions">
            <a href={pageContent.url} target="_blank" rel="noreferrer">
              <button class="btn btn-primary">Source</button>
            </a>
          </div>
        </div>
      </div>
      {/if}
      <label for="my-drawer" class="btn btn-primary drawer-button mt-4">View Articles</label>
      <div class="hero bg-base-200">
      </div>
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        {#each articles as article}
        <li><a href="" on:click={populateContent}>
          <div class="card shadow-xl image-full">
            <figure><img src={article.urlToImage} alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title" id={article.url}>{article.title}</h2>
            </div>
          </div>
        </a></li>
        {/each}
      </ul>
    </div>
  </div>
</main> 