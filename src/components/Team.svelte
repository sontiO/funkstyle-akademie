<script>
  export let prismicData;
  import TeamMember from "./TeamMember.svelte";
</script>

<h2 id="team" class="mt-12">Team</h2>
<div class="bg-zinc-900/30">
  <div class="mx-auto max-w-md py-12 px-4  sm:max-w-5xl  sm:px-6 lg:px-8 ">
    <div class="space-y-12">
      <div
        class="space-y-5 text-gray-200 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
      >
        <h3 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Unsere Trainer
        </h3>
        <p class="max-w-lg text-xl text-gray-500">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          ultricies donec risus sodales. Et voluptate qui ipsum no
        </p>
      </div>
      <ul
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
      >
        <TeamMember />

        <!-- More people... -->
      </ul>
    </div>
  </div>
</div>
