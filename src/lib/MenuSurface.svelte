
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCMenuSurface  } from "@material/menu-surface"
    
    export let open = false;

    let node:HTMLElement;
    let component:MDCMenuSurface;

    

    onMount(()=>{

        component = new MDCMenuSurface(node);
        if(open)
        {
            component.open()
        }
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/menu-surface/dist/mdc.menu-surface.min.css");
    </style>
    