
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCNotchedOutline  } from "@material/notched-outline"
    

    let node:HTMLElement;
    let component:MDCNotchedOutline;

    onMount(()=>{

        component = new MDCNotchedOutline(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/notched-outline/dist/mdc.notched-outline.min.css");
    </style>
    