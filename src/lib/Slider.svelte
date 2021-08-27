
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCSlider  } from "@material/slider"
    

    let node:HTMLElement;
    let component:MDCSlider;

    onMount(()=>{

        component = new MDCSlider(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/slider/dist/mdc.slider.min.css");
    </style>
    