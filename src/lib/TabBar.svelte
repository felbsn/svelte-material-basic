
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCTabBar  } from "@material/tab-bar"
    

    let node:HTMLElement;
    let component:MDCTabBar;

    onMount(()=>{

        component = new MDCTabBar(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/tab-bar/dist/mdc.tab-bar.min.css");
    </style>
    