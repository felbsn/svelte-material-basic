
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCCircularProgress  } from "@material/circular-progress"
    

    let node:HTMLElement;
    let component:MDCCircularProgress;

    onMount(()=>{

        component = new MDCCircularProgress(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/circular-progress/dist/mdc.circular-progress.min.css");
    </style>
    