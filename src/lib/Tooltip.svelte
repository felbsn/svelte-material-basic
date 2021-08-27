
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCTooltip  } from "@material/tooltip"
    

    let node:HTMLElement;
    let component:MDCTooltip;

    onMount(()=>{

        component = new MDCTooltip(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/tooltip/dist/mdc.tooltip.min.css");
    </style>
    