<script>
    import PriceCard from "../components/PriceCard.svelte";
</script>

<h2 id="preise" class="mt-12">Preise</h2>
<div class="bg-zinc-900/30 max-w-md sm:max-w-5xl w-full h-full flex flex-col space-y-12  py-12 justify-center items-center">
    <PriceCard title="Probestunde" price={0} subTitle="2x kostenlos"/>
    <PriceCard title="Einzelstunde" price={10} />
    <PriceCard title="Season Pass" price={96} subTitlle="3 Monate (jeweils 32€)" variant="secondary" highlightText="Unser Top Angebot" subTitle="3 Monate (32€ je Monat)"/>
    <PriceCard title="Monats Abo" price={39} subTitlle="1 Std. pro Woche"/>
</div>
