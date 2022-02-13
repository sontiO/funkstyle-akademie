<script context="module">
    import createClient from "$lib/prismicClient.js"
    import * as prismicH from "@prismicio/helpers"
    
    export async function load({ url, params, fetch})  {
      const { uid } = params
      const client = createClient(fetch)
      const document = await client.getByUID("landing_page", uid)
  
      return { 
        props: { 
          document 
       }
      }
    }
  </script>
  
  <script>
    export let document
    console.log(document.data.body[1].primary.video)

  </script>
  
  <div class="bg-black w-full h-screen">
  <h1 class="h1">{document.uid}</h1>
  <div class="flex flex-col space-y-20  justify-center items-center">
  <img alt={document.data.body[0].primary.logo.alt} src={document.data.body[0].primary.logo.url} />
  <div class="video-container">
    <!-- <iframe title="video"  width="800" height="413" src={document.data.body[1].primary.video.html.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe> -->
   {@html document.data.body[1].primary.video.html} 
</div>
  </div>

   
 </div>

 <style>

    .h1 { color: red}


 </style> 


