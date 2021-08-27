
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCRipple  } from "@material/ripple"
    

    let node:HTMLElement;
    let component:MDCRipple;

    onMount(()=>{

        component = new MDCRipple(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/ripple/dist/mdc.ripple.min.css");
    </style>
    