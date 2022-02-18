<script>
import TimeTable from "../components/TimeTable.svelte";
import EmbeddedVideo from "../components/EmbeddedVideo.svelte";
import ContactForm from "../components/ContactForm.svelte";
import Team from "../components/Team.svelte";
import Location from "../components/Location.svelte";
import Prices from "../components/Prices.svelte";

</script>

<div class="w-screen h-full bg-zinc-800 overflow-x-hidden">
  <nav class="w-full h-20 flex flex-row justify-between bg-zinc-900/30 text-gray-200 p-6 items-center">
    <h3>funkstyle akademie</h3>
    <ul class="flex flex-row space-x-6 ">
      <li><a href="/#stundenplan">Stundenplan</a></li>
      <li><a href="#preise">Preise</a></li>
      <li><a href="#location">Location</a></li>
      <li> <a href="#team">Team</a></li>
      <li><a href="#kontakt">Kontakt</a></li>
    </ul>
  </nav>

  


  <body class="items-center flex justify-center  flex-col space-y-12 overflow-x-hidden "> 
    <h2 class="mt-12">Was ist Boogystyle?</h2>
  <EmbeddedVideo />
   <TimeTable />
   <Prices />
   <Location />
    <Team />
    <ContactForm />
  </body>
  </div>

