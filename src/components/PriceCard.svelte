
     <script>
        export let title;
        export let price;
        export let subTitle = "";
        export let  variant = "primary"
        export let highlightText = ""
      </script>
      {#if variant === 'primary'}
         <div class="w-10/12 text-gray-100 text-xl sm:text-3xl font-semibold p-4 sm:p-6 items-center justify-center flex bg-zinc-700 rounded-lg flex-col">
           <div class="  flex flex-row items-center justify-between  w-full">
               <dd>{title}</dd>
               <dd>{price}€</dd>
           </div>
           <dd class="text-sm text-gray-100 w-full">{subTitle}</dd>
         </div>
         {:else if variant === 'secondary'}
         <div class="relative w-10/12 text-gray-100 text-xl sm:text-3xl font-semibold p-4 sm:p-6 items-center justify-center flex bg-zinc-700 rounded-lg flex-col">
            <div class="  flex flex-row items-center justify-between w-full">
                <dd>{title}</dd>
                <dd>{price}€</dd>
            </div>
            <dd class="text-sm text-gray-100 w-full">{subTitle}</dd>
            <div class="rounded-md p-1 px-2 absolute -right-2 -top-4 bg-green-600 text-gray-100 text-sm font-medium ">{highlightText}</div>
          </div>
      {/if}

