
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCMenu  } from "@material/menu"
    

    let node:HTMLElement;
    let component:MDCMenu;

    onMount(()=>{

        component = new MDCMenu(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/menu/dist/mdc.menu.min.css");
    </style>
    