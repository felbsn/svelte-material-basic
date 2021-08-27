
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCSnackbar  } from "@material/snackbar"
    

    let node:HTMLElement;
    let component:MDCSnackbar;

    onMount(()=>{

        component = new MDCSnackbar(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/snackbar/dist/mdc.snackbar.min.css");
    </style>
    