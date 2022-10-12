<script>
    export let data;
    console.log(data)
    let images = Object.values(data);
</script>
<main>
    <div class="w-64 carousel rounded-box">
        {#each images as image}
        <div class="carousel-item w-full">
          <img src={image.hdurl} class="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        {/each}
      </div>
</main>