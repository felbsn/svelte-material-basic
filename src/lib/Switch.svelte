
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCSwitch  } from "@material/switch"
    

    let node:HTMLElement;
    let component:MDCSwitch;

    onMount(()=>{

        component = MDCSwitch.attachTo(node as HTMLButtonElement);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/switch/dist/mdc.switch.min.css");
    </style>
    