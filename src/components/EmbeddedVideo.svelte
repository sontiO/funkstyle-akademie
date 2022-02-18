<script>
    export let prismicData
    console.log(prismicData.data.body[0].primary.video)
    let url = prismicData.data.body[0].primary.video.embed_url
    let newUrl = url.replace("watch?v=", "embed/")


    console.log(newUrl)
    
    
</script>

<div class="max-w-md  sm:max-w-5xl h-auto w-full flex items-center justify-center">
    <iframe width="1280" height="515" src={newUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
