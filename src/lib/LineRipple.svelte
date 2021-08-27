
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCLineRipple  } from "@material/line-ripple"
    

    let node:HTMLElement;
    let component:MDCLineRipple;

    onMount(()=>{

        component = new MDCLineRipple(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/line-ripple/dist/mdc.line-ripple.min.css");
    </style>
    