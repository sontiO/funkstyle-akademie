<script>
import TimeTable from "../components/TimeTable.svelte";
import EmbeddedVideo from "../components/EmbeddedVideo.svelte";

</script>
<div class="w-screen h-full bg-zinc-800 ">
  <nav class="w-full h-20 flex flex-row justify-between bg-zinc-900/30 text-gray-200 p-6 items-center">
    <h3>funkstyle akademie</h3>
    <ul class="flex flex-row space-x-6 ">
      <li>Stundenplan</li>
      <li>Preise</li>
      <li>Location</li>
      <li>Kontakt</li>
      <li>Team</li>
    </ul>
  </nav>

  <body class="items-center flex justify-center  flex-col space-y-12"> 
    <h2 class="mt-12">Was ist Boogystyle?</h2>
  <EmbeddedVideo />
   <TimeTable />
  </body>
  </div>



