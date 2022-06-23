<script>
  export let title;
  export let subTitle;
</script>

<div class="flex space-x-4">
  <div class="flex flex-col justify-between font-roboto text-gray-400">
    <p>20:00</p>
    <p>21:30</p>
  </div>
  <div
    class="w-52 place-self-center overflow-hidden rounded-lg bg-white px-1 py-4 shadow sm:w-64 sm:p-6"
  >
    <dd class="mt-1 text-3xl font-semibold text-gray-900">{title}</dd>
    <dt class="truncate text-sm font-medium text-gray-500">{subTitle}</dt>
  </div>
</div>
