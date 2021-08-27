
    <script lang="ts">
        import { onMount } from "svelte";

        export let primary:string|null = null;
        export let secondary:string|null = null;
        export let value:any = null;
        
    
        let node:HTMLElement;
        // let component:MDCList;
    
        onMount(()=>{
    
            // component = new MDCList(node);
            return ()=> {
                // component?.destroy();
            }
        })
        </script>
                <li on:click  bind:this={node} class="mdc-list-item" tabindex="0">
                  <span class="mdc-list-item__ripple"></span>
                  <span class="mdc-list-item__text">
                      {#if primary !== null}
                    <span class="mdc-list-item__primary-text">{primary}</span>
                      {/if}
                      {#if secondary !== null}
                      <span class="mdc-list-item__secondary-text">{secondary}</span>
                    {/if}
                    <slot></slot>
                  </span>
                </li>
          
        <style>
        @import url("@material/list/dist/mdc.list.min.css");

        li {
            padding: 12px;
        }


        </style>
        