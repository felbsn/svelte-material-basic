
    <script lang="ts">
    import { onMount } from "svelte";
    
    

    let node:HTMLElement;
    let component:any;

    onMount(()=>{

        //component = new MDCDom(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    
    </style>
    