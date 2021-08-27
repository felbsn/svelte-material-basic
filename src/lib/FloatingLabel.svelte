
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCFloatingLabel  } from "@material/floating-label"
    

    let node:HTMLElement;
    let component:MDCFloatingLabel;

    onMount(()=>{

        component = new MDCFloatingLabel(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/floating-label/dist/mdc.floating-label.min.css");
    </style>
    