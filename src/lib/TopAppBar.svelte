
    <script lang="ts">
    import { onMount } from "svelte";
    import {  MDCTopAppBar  } from "@material/top-app-bar"
    
    let node:HTMLElement;
    let component:MDCTopAppBar;

    onMount(()=>{

        component = new MDCTopAppBar(node);
        return ()=> {
            component?.destroy();
        }
    })
    </script>

<div style="height: 100%; width:100%; display:flex;flex-grow:1;">


    <header bind:this={node} class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
            <span class="mdc-top-app-bar__title">Page title</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
          </section>
        </div>
      </header>

      <main class="mdc-top-app-bar--fixed-adjust" style="display:flex;flex-grow:1;"  >
        <slot name="drawer" fixed></slot>
            <slot></slot>
    
      
    
     
      </main>

</div>





    <!-- <header bind:this={node} class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
            <span class="mdc-top-app-bar__title">Page title</span>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">

            <slot name="toolbar">


            </slot>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Favorite">favorite</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">search</button>
            <button class="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Options">more_vert</button>
          </section>
        </div>
      </header>

      <slot name="drawer"></slot>

      <main class="mdc-top-app-bar--fixed-adjust">
        App content
     
      </main>

      <slot/> -->
    
    <style>
    @import url("@material/top-app-bar/dist/mdc.top-app-bar.min.css");
    </style>
    