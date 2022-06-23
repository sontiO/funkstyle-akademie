<script context="module">
  import "../app.css";
  import createClient from "$lib/prismicClient.js";
  import { setContext } from "svelte";

  export async function load({ fetch }) {
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
  const imprint = prismicData.data.body[0].primary.imprint;
  const email = prismicData.data.body[0].primary.email;
  const prices = prismicData.data.prices;
  const trainers = prismicData.data.team;
  console.log(prismicData);
</script>

<div class="h-full w-screen overflow-x-hidden  bg-lightGray">
  <nav
    class="fixed top-0 flex h-auto  w-full flex-row items-center justify-between border-b-2  border-zinc-500/10 bg-zinc-900/40 p-6 text-gray-200  backdrop-blur-sm firefox:bg-opacity-90"
  >
    <img
      src="https://prismic-io.s3.amazonaws.com/prismic-io/logos/prismic-io-logo-white.svg"
      alt="logo"
      class="mr-2 h-auto w-auto"
    />
    <ul
      class="mx:2 flex flex-row space-x-6 overflow-x-scroll  text-sm sm:mx-6 sm:overflow-auto sm:text-base"
    >
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
    <h2 class="mt-28  text-center">
      {prismicData.data.body[0].primary.heading[0].text}
    </h2>
    <EmbeddedVideo {prismicData} />
    <TimeTable {prismicData} />
    <Prices {prices} />
    <Location />
    <Team {trainers} />
    <ContactForm {imprint} {email} />
  </body>
  <Footer />
</div>
