<script context="module">
	import '../app.css';
    import createClient from "$lib/prismicClient.js"
    import * as prismicH from "@prismicio/helpers"
    
    export async function load({ url, fetch})  {
      const client = createClient(fetch)
      const document = await client.getSingle("landing_page")
  
      return { 
        props: { 
          document 
       }
      }
    }
  </script>
  
  <script>
    export let document
    console.log(document)

  </script>

<slot />
