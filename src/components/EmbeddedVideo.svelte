<script>
  export let prismicData;
  console.log(prismicData.data.body[0].primary.video);
  let url = prismicData.data.body[0].primary.video.embed_url;
  let newUrl = url.replace("watch?v=", "embed/");

  console.log(newUrl);
</script>

<h2 class="mt-12 text-center ">
  {prismicData.data.body[0].primary.heading[0].text}
</h2>
<div
  class="flex  h-auto w-full max-w-md items-center justify-center sm:max-w-5xl"
>
  <iframe
    width="1280"
    height="515"
    src={newUrl}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</div>
