
    <script lang="ts">
    import { onMount } from "svelte";
    // import {  MDCBase  } from "@material/base"
    

    let node:HTMLElement;
    // let component:MDCBase;

    onMount(()=>{

        // component = new MDCBase(node);
        return ()=> {
            // component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    
    </style>
    