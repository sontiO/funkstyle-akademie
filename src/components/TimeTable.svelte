<script>
    import TextCard from "../components/TextCard.svelte"
    
    </script>
  <h2  id="stundenplan">Stundenplan</h2>
    
    <div id="stundenplan"   class=" w-full h-auto max-w-md  sm:max-w-5xl  flex flex-col sm:flex-row justify-center bg-zinc-900/30 py-8 sm:py-24">
        
        <div class="w-full text-center  flex flex-col justify-center items-center  space-y-12 ">
            <h3 class="text-3xl font-roboto  text-gray-200">Dienstag</h3>
            <TextCard title="Boogystyle" subTitle="Anfänger-Fortgeschrittene"/>
            <div class="invisible"><TextCard title="Boogystyle" subTitle="Anfänger-Fortgeschrittene"/></div>
        </div>
        <div class="w-full text-center  flex flex-col justify-center items-center space-y-12 ">
            <h3 class="text-3xl font-roboto  text-gray-200">Donnerstag</h3>
            <TextCard title="Party Dance" subTitle="Anfänger"/>
            <TextCard title="Locking" subTitle="Anfänger"/>
        </div>
        </div>
