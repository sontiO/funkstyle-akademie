<script>
  export let title;
  export let price;
  export let subTitle = "";
  export let variant = "primary";
  export let highlightText;
</script>

{#if variant === "primary"}
  <li
    class="flex w-10/12 flex-col items-center justify-center rounded-lg bg-zinc-700 p-4 text-xl font-semibold text-gray-100 sm:p-6 sm:text-3xl"
  >
    <div class="  flex w-full flex-row items-center  justify-between">
      <dd>{title}</dd>
      <dd>{price}€</dd>
    </div>
    <dd class="w-full text-sm text-gray-100">{subTitle}</dd>
  </li>
{:else if variant === "secondary"}
  <li
    class="relative w-10/12 text-gray-100 text-xl sm:text-3xl font-semibold p-4 sm:p-6 items-center justify-center flex bg-zinc-700 rounded-lg flex-col"
  >
    <div class="  flex flex-row items-center justify-between w-full">
      <dd>{title}</dd>
      <dd>{price}€</dd>
    </div>
    <dd class="text-sm text-gray-100 w-full">{subTitle}</dd>
    <div
      class="rounded-md p-1 px-2 absolute -right-2 -top-4 bg-green-600 text-gray-100 text-sm font-medium "
    >
      {highlightText && highlightText}
    </div>
  </li>
{/if}
