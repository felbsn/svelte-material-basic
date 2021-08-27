
    <script lang="ts">
    import { onMount } from "svelte";
    
    

    let node:HTMLElement;
    let component:any;

    onMount(()=>{

        //component = new MDCSegmentedButton(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/segmented-button/dist/mdc.segmented-button.min.css");
    </style>
    