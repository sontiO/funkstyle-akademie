
     <script>
       export let title;
       export let subTitle;

     </script>
     <div class="flex space-x-4">
       <div class="flex flex-col justify-between text-gray-400 font-roboto" >
         <p>20:00</p>
         <p>21:30</p>
       </div>
     <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6 w-64 place-self-center">
        <dd class="mt-1 text-3xl font-semibold text-gray-900">{title}</dd>
        <dt class="text-sm font-medium text-gray-500 truncate">{subTitle}</dt>

      </div>
    </div>
