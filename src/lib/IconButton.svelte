
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCIconButtonToggle  } from "@material/icon-button"
    import type {  MDCRipple } from "@material/ripple";

    export let on:boolean = false;
    $: toggle(on);
    function toggle(value:boolean){

        console.log('toggling' ,  component?.on, value);

        if(component)
        {
            if(component.on != value)
        {
            component.on = value;
        }
        }

     
    }
    
    let node:HTMLElement;
    let component:MDCIconButtonToggle;
    let ripple:MDCRipple;

    onMount(()=>{

        component = new MDCIconButtonToggle(node);
        component.on = on;
        //ripple = new MDCRipple(node);
        //ripple.unbounded = true;

        component.listen('MDCIconButtonToggle:change', (ev:any)=>
        {
            if(ev.detail.isOn)
            {   
                on = true;
            }else
            {
                on = false;
            }
        });
        
        

        return ()=> {
            component?.destroy();
            ripple?.destroy();
        }
    })
    </script>

    
    <!-- <button bind:this={node} class="mdc-icon-button material-icons">
        <div class="mdc-icon-button__ripple"></div>
        favorite
      </button> -->


      <button bind:this={node}
      class="mdc-icon-button"
      aria-label="Add to favorites"
      data-aria-label-on="Remove from favorites"
      data-aria-label-off="Add to favorites">
      <div class="mdc-icon-button__ripple"></div>
      <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"><slot/></i>
      <i class="material-icons mdc-icon-button__icon"><slot/>{'_border'}</i>
   </button>


    <style>
        @import url("@material/icon-button/dist/mdc.icon-button.min.css");
        @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    </style>
    