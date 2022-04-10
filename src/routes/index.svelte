<script context="module">
  import "../app.css";
  import createClient from "$lib/prismicClient.js";
  import { setContext } from "svelte";

  export async function load({ url, fetch }) {
    const client = createClient(fetch);
    const document = await client.getSingle("landing_page");

    return {
      props: {
        document,
      },
    };
  }
</script>

<script>
  import TimeTable from "../components/TimeTable.svelte";
  import EmbeddedVideo from "../components/EmbeddedVideo.svelte";
  import ContactForm from "../components/ContactForm.svelte";
  import Team from "../components/Team.svelte";
  import Location from "../components/Location.svelte";
  import Prices from "../components/Prices.svelte";
  import Footer from "../components/Footer.svelte";
  import { getContext } from "svelte";

  export let document;
  setContext("prismicData", document);
  const prismicData = getContext("prismicData");
  console.log(prismicData);
</script>

<div class="bg-lightGray h-full w-screen overflow-x-hidden">
  <nav
    class="flex h-20 w-full flex-row items-center justify-between bg-zinc-900/30 p-6 text-gray-200"
  >
    <h3>funkstyle akademie</h3>
    <ul class="mx-6 flex flex-row space-x-6 text-sm sm:text-base">
      <li><a href="/#stundenplan">Stundenplan</a></li>
      <li><a href="#preise">Preise</a></li>
      <li><a href="#location">Location</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#kontakt">Kontakt</a></li>
    </ul>
  </nav>

  <body
    class="mx-6 flex flex-col  items-center justify-center space-y-12 overflow-x-hidden"
  >
    <h2 class="mt-12 text-center ">Was ist Boogystyle?</h2>
    <EmbeddedVideo {prismicData} />
    <TimeTable {prismicData} />
    <Prices />
    <Location />
    <Team />
    <ContactForm />
  </body>
  <Footer />
</div>
