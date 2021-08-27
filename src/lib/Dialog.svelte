
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCDialog  } from "@material/dialog"
    

    let node:HTMLElement;
    let component:MDCDialog;

    onMount(()=>{

        component = new MDCDialog(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/dialog/dist/mdc.dialog.min.css");
    </style>
    