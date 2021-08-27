
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCDrawer  } from "@material/drawer"
    
    let node:HTMLElement;
    let component:MDCDrawer;

    export let variant:'dismissible'|'modal' = 'dismissible'
    export let fixed = false;
    export let open = true;
    $:onOpen(open);


    let onOpen = (value:boolean) =>
    {
        if(component)
        {
            if(component.open != value)
            {
                component.open = value;
            }
        }
    }

    onMount(()=>{

        component = MDCDrawer.attachTo(node);
        component.listen('MDCDrawer:closed',()=>
        {
            open = false;   
        })
        component.open = open;
        return ()=> {
            component?.destroy();
        }
    })
    </script>
            <aside bind:this={node} class="mdc-drawer" class:mdc-drawer--modal={variant == 'modal'} class:mdc-drawer--dismissible={ variant=='dismissible'} class:fixed  class:mdc-top-app-bar--fixed-adjust={fixed}>
              <div class="mdc-drawer__content">
                <nav class="mdc-list">
                  <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page" tabindex="0">
                    <span class="mdc-list-item__ripple"></span>
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
                    <span class="mdc-list-item__text">Inbox</span>
                  </a>
                  <a class="mdc-list-item" href="#">
                    <span class="mdc-list-item__ripple"></span>
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
                    <span class="mdc-list-item__text">Outgoing</span>
                  </a>
                  <a class="mdc-list-item" href="#">
                    <span class="mdc-list-item__ripple"></span>
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
                    <span class="mdc-list-item__text">Drafts</span>
                  </a>
                </nav>
              </div>
            </aside>

            {#if variant== 'modal'}
                <div class="mdc-drawer-scrim"></div>
            {/if}
    <style>
    @import url("@material/drawer/dist/mdc.drawer.min.css");
    /* .fixed{
        padding-top: 0;
        margin-top: 64px;
        background: blue;
    } */
    </style>
    