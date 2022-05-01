<script>
  import TextCard from "../components/TextCard.svelte";
  export let prismicData;
  console.log(prismicData);
</script>

<h2 id="stundenplan">Stundenplan</h2>

<div
  id="stundenplan"
  class=" flex h-auto w-full  max-w-md  flex-col justify-center bg-zinc-900/30 py-8 sm:max-w-5xl sm:flex-row sm:py-12"
>
  <div
    class="flex w-full  flex-col items-center justify-center space-y-12  text-center "
  >
    <h3 class="font-roboto text-3xl  text-gray-200">Dienstag</h3>
    <TextCard title="Boogystyle" subTitle="Anfänger-Fortgeschrittene" />
    <div class="invisible">
      <TextCard title="Boogystyle" subTitle="Anfänger-Fortgeschrittene" />
    </div>
  </div>
  <div
    class="flex w-full  flex-col items-center justify-center space-y-12 text-center "
  >
    <h3 class="font-roboto text-3xl  text-gray-200">Donnerstag</h3>
    <TextCard title="Party Dance" subTitle="Anfänger" />
    <TextCard title="Locking" subTitle="Anfänger" />
  </div>
</div>
