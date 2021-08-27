
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCLinearProgress  } from "@material/linear-progress"
    

    let node:HTMLElement;
    let component:MDCLinearProgress;

    onMount(()=>{

        component = new MDCLinearProgress(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/linear-progress/dist/mdc.linear-progress.min.css");
    </style>
    