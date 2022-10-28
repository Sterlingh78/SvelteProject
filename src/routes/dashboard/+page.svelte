<script>
    export let data;
    import Radar from '../../lib/components/Radar/Radar.svelte';
    import Scatter from '../../lib/components/scatter/Scatter.svelte';
    import Polar from '../../lib/components/polar/Polar.svelte';
    let images = Object.values(data);
</script>
<main class="flex flex-wrap">
    <div class="m-2 flex-1 carousel rounded-box">
        {#each images as image}
        <div class="carousel-item w-full">
          <img src={image.hdurl} class="w-full" alt="Tailwind CSS Carousel component" />
        </div>
        {/each}
    </div>
    <div class="m-2 flex-1 card bg-slate-400">
      <Radar />
    </div>
    <div class="m-2 flex-1 card bg-slate-400">
      <Polar />
    </div>
    <div class="m-2 flex-1 w-64 card bg-slate-400">
      <Scatter />
    </div>
</main>