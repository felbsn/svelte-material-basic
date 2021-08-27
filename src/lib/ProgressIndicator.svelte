
    <script lang="ts">
    import { onMount } from "svelte";
    

    let node:HTMLElement;
    let component:MDCProgressIndicator;

    onMount(()=>{

        component = new MDCProgressIndicator(node);

        return ()=> {
            component?.destroy();
        }
    })
    </script>

    <div bind:this={node}>
    </div>
    
    <style>
    
    </style>
    