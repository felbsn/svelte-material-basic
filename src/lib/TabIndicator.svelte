
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCTabIndicator  } from "@material/tab-indicator"
    

    let node:HTMLElement;
    let component:MDCTabIndicator;

    onMount(()=>{

        component = new MDCTabIndicator(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/tab-indicator/dist/mdc.tab-indicator.min.css");
    </style>
    