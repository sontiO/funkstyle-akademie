<script>
  import PriceCard from "../components/PriceCard.svelte";
  export let prices;
  console.log(prices);
</script>

<h2 id="preise" class="mt-12">Preise</h2>
<div
  class="flex h-full w-full max-w-md flex-col items-center justify-center space-y-12  bg-zinc-900/30 py-12 sm:max-w-5xl"
>
  <ul
    class="flex w-full max-w-md flex-col items-center justify-center space-y-12 sm:max-w-5xl "
  >
    {#each prices as price}
      <PriceCard
        title={price.title[0].text}
        price={price.price}
        subTitle={price.subtitle[0] && price.subtitle[0].text}
        highlightText={price.highlight_text[0] && price.highlight_text[0].text}
        variant={price.highlight_text[0] ? "secondary" : "primary"}
      />
    {/each}
  </ul>
</div>
