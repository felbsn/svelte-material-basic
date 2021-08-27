
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCTabScroller  } from "@material/tab-scroller"
    

    let node:HTMLElement;
    let component:MDCTabScroller;

    onMount(()=>{

        component = new MDCTabScroller(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/tab-scroller/dist/mdc.tab-scroller.min.css");
    </style>
    