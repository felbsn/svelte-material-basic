
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCCheckbox  } from "@material/checkbox"
    

    let node:HTMLElement;
    let component:MDCCheckbox;

    onMount(()=>{

        component = new MDCCheckbox(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/checkbox/dist/mdc.checkbox.min.css");
    </style>
    