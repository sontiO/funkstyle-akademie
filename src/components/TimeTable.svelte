<script>
  import DayColumn from "../components/DayColumn.svelte";
  export let prismicData;
  export let timetable = prismicData.data.stundenplan;
  console.log(timetable);
  //map over timetables and and group arrays by day
  const timetableByDay = timetable.reduce((acc, cur) => {
    const day = cur.day[0].text;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(cur);
    return acc;
  }, {});
  console.log(timetableByDay);
  //map over timetableByDay and create DayColumns
  const timetableByDayColumns = Object.keys(timetableByDay).map((day) => {
    return {
      day: day,
      timetable: timetableByDay[day],
    };
  });
  console.log(timetableByDayColumns);
</script>

<h2 id="stundenplan">Stundenplan</h2>

<div
  id="stundenplan"
  class=" grid h-auto w-full max-w-md grid-cols-1 place-items-start bg-zinc-900/30 sm:max-w-5xl sm:py-12 md:grid-cols-2"
>
  {#each timetableByDayColumns as day}
    <DayColumn {day} />
  {/each}
</div>
