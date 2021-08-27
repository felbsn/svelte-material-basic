
    <script lang="ts">
    import { onMount } from "svelte";
    
    

    let node:HTMLElement;
    let component:any;

    onMount(()=>{

        //component = new MDCChips(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/chips/dist/mdc.chips.min.css");
    </style>
    