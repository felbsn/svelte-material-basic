
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCFormField  } from "@material/form-field"
    

    let node:HTMLElement;
    let component:MDCFormField;

    onMount(()=>{

        component = new MDCFormField(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>


    <div bind:this={node}>
    </div>
    
    <style>
    @import url("@material/form-field/dist/mdc.form-field.min.css");
    </style>
    