<script>
  export let day;
  import TextCard from "./TextCard.svelte";
  console.log("day", day);
</script>

<div
  class="mb-8 flex  w-full flex-col items-center justify-center space-y-8 text-center "
>
  <h3 class=" mt-8 font-roboto  text-3xl text-gray-200">{day.day}</h3>
  {#each day.timetable as timetable, index}
    <TextCard
      title={day.timetable[index].name[0].text}
      subTitle={day.timetable[index].subtitle[0].text}
    />
  {/each}
</div>
