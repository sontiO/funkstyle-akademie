
     <script>
        export let title;
        export let price;
        export let subTitle = "";
      </script>
      <div class="w-full items-center justify-center flex ">
      <div class="relative w-10/12 bg-zinc-700 shadow rounded-lg overflow-hidden sm:p-6 place-self-center  flex flex-row items-center  space-x-32 justify-items-start">
         <dd class=" text-3xl font-semibold text-gray-200">{title}</dd>
         <dd class=" text-3xl  text-gray-200">{price} €</dd>
         <dt class="text-sm font-medium text-gray-200 absolute right-0 px-8">{subTitle}</dt>
       </div>
    </div>