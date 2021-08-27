<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { MDCList } from "@material/list";
  import type { MDCListActionEvent } from "@material/list/types";

  export let selecteable = false;

  export const clear = () => {
    component.selectedIndex = -1;
  };

  $: onSelectionEnabled(selecteable);
  function onSelectionEnabled(value: boolean) {
    if (component) {
      component.singleSelection = value;
    }
  }

  const dispatch = createEventDispatcher<{ selected: number }>();

  let node: HTMLElement;
  let component: MDCList;

  onMount(() => {
    component = new MDCList(node);
    component.listen("MDCList:action", (ev: MDCListActionEvent) => {
      let index = ev.detail.index;
      if (typeof index == "number") {
        console.log("selected", index);
        dispatch("selected", index);
      } else {
        console.log("selection", index);
      }
    });
    onSelectionEnabled(selecteable);
    return () => {
      component?.destroy();
    };
  });
</script>

<ul bind:this={node} role="listbox" class="mdc-list mdc-list--two-line">
  <!-- <li class="mdc-list-item" tabindex="0">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Two-line item</span>
                <span class="mdc-list-item__secondary-text">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Two-line item</span>
                <span class="mdc-list-item__secondary-text">Secondary text</span>
              </span>
            </li>
            <li class="mdc-list-item">
              <span class="mdc-list-item__ripple"></span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">Two-line item</span>
                <span class="mdc-list-item__secondary-text">Secondary text</span>
                
              </span>
            </li> -->

  <slot />
</ul>

<style>
  @import url("@material/list/dist/mdc.list.min.css");
</style>
