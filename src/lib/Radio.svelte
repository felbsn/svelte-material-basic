
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCRadio  } from "@material/radio"
    

    let node:HTMLElement;
    let component:MDCRadio;

    onMount(()=>{

        component = new MDCRadio(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/radio/dist/mdc.radio.min.css");
    </style>
    