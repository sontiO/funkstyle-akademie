
     <script>
        export let title;
        export let price;
        export let subTitle = "";
        export let  variant = "primary"
        export let highlightText = ""
      </script>
      {#if variant === 'primary'}
  <div class="w-full items-center justify-center flex ">
           <div class="relative w-10/12 bg-zinc-700 shadow rounded-lg overflow-hidden p-4 sm:p-6 place-self-center  flex flex-row items-center  space-x-12 sm:space-x-32 justify-items-start">
              <dd class="text-xl sm:text-3xl font-semibold text-gray-100">{title}</dd>
              <dd class="text-xl sm:text-3xl  text-gray-100">{price} €</dd>
              <dt class="text-sm font-medium text-gray-200 absolute right-0 px-8">{subTitle}</dt>
            </div>
         </div>
         {:else if variant === 'secondary'}
         <div class="w-full items-center justify-center flex">
            <div class="overflow-visible relative w-10/12 bg-zinc-700 shadow rounded-lg p-4 sm:p-6 place-self-center  flex flex-row items-center space-x-12 sm:space-x-32 justify-items-start">
               <dd class="text-xl sm:text-3xl font-semibold text-gray-100">{title}</dd>
               <dd class="text-xl sm:text-3xl  text-gray-100">{price} €</dd>
               <dd class="text-sm  text-gray-100 absolute right-2 sm:right-8">{subTitle}</dd>
               <div class="rounded-md p-1 px-2 absolute -right-2 -top-4 bg-green-600 text-gray-100 text-sm font-medium ">{highlightText}</div>

             </div>
          </div>
      {/if}


