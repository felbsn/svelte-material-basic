
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCDataTable  } from "@material/data-table"
    

    let node:HTMLElement;
    let component:MDCDataTable;

    onMount(()=>{

        component = new MDCDataTable(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/data-table/dist/mdc.data-table.min.css");
    </style>
    