
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCBanner  } from "@material/banner"
    

    let node:HTMLElement;
    let component:MDCBanner;

    onMount(()=>{

        component = new MDCBanner(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/banner/dist/mdc.banner.min.css");
    </style>
    