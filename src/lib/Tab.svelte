
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCTab  } from "@material/tab"
    

    let node:HTMLElement;
    let component:MDCTab;

    onMount(()=>{

        component = new MDCTab(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/tab/dist/mdc.tab.min.css");
    </style>
    