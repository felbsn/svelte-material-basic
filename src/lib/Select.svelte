<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { MDCSelect } from "@material/select";
    import List from "./List.svelte";
    import Item from "./Item.svelte";
    import type { Variant } from "./common/variant";

    export let label: string = "";
    export let items: { label: string; value: string }[] = [];
    export let variant: Variant = "filled";

    export let selectedIndex: number = -1;

    export let value = null;

    let node: HTMLElement;
    let component: MDCSelect;

    $: onItemsChanged(items);
    $: onSelectedIndexChanged(selectedIndex);

    const dispatch =
        createEventDispatcher<{ change: { index: number; value: string } }>();

    onMount(() => {
        component = new MDCSelect(node);

        component.selectedIndex = selectedIndex;

        component.listen("MDCSelect:change", () => {
            dispatch("change", {
                index: component.selectedIndex,
                value: component.value,
            });
            value = component.value;
            selectedIndex = component.selectedIndex;
            //          alert(`Selected option at index ${component.selectedIndex} with value "${component.value}"`);
        });

        setInterval(() => {}, 1000);

        return () => {
            component?.destroy();
        };
    });

    const onSelectedIndexChanged = (index) => {
        if (component) {
            if (component.selectedIndex != selectedIndex)
                component.selectedIndex = index;
        }
    };

    const onItemsChanged = (data) => {
        if (component) {
            component.selectedIndex = -1;
            value = null;
        }
    };
</script>

{#if variant == "filled"}
    <div
        bind:this={node}
        class="mdc-select mdc-select--filled demo-width-class"
    >
        <div
            class="mdc-select__anchor"
            role="button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-labelledby="demo-label demo-selected-text"
        >
            <span class="mdc-select__ripple" />
            <span id="demo-label" class="mdc-floating-label">{label}</span>
            <span class="mdc-select__selected-text-container">
                <span
                    id="demo-selected-text"
                    class="mdc-select__selected-text"
                />
            </span>
            <span class="mdc-select__dropdown-icon">
                <svg
                    class="mdc-select__dropdown-icon-graphic"
                    viewBox="7 10 10 5"
                    focusable="false"
                >
                    <polygon
                        class="mdc-select__dropdown-icon-inactive"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 10 12 15 17 10"
                    />
                    <polygon
                        class="mdc-select__dropdown-icon-active"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 15 12 10 17 15"
                    />
                </svg>
            </span>
            <span class="mdc-line-ripple" />
        </div>

        <div
            class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
        >
            <ul class="mdc-list" role="listbox">
                {#each items as item}
                    <li
                        class="mdc-list-item"
                        aria-selected="true"
                        data-value={item.value}
                        role="option"
                    >
                        <span class="mdc-list-item__ripple" />
                        <span class="mdc-list-item__text">
                            {item.label}
                        </span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{:else}
    <div bind:this={node} class="mdc-select mdc-select--outlined">
        <div class="mdc-select__anchor" aria-labelledby="outlined-select-label">
            <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading" />
                <span class="mdc-notched-outline__notch">
                    <span id="outlined-select-label" class="mdc-floating-label">
                        {label}
                    </span>
                </span>
                <span class="mdc-notched-outline__trailing" />
            </span>
            <span class="mdc-select__selected-text-container">
                <span
                    id="demo-selected-text"
                    class="mdc-select__selected-text"
                />
            </span>
            <span class="mdc-select__dropdown-icon">
                <svg
                    class="mdc-select__dropdown-icon-graphic"
                    viewBox="7 10 10 5"
                    focusable="false"
                >
                    <polygon
                        class="mdc-select__dropdown-icon-inactive"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 10 12 15 17 10"
                    />
                    <polygon
                        class="mdc-select__dropdown-icon-active"
                        stroke="none"
                        fill-rule="evenodd"
                        points="7 15 12 10 17 15"
                    />
                </svg>
            </span>
        </div>
        <div
            class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
        >
            <ul class="mdc-list" role="listbox">
                {#each items as item}
                    <li
                        class="mdc-list-item"
                        aria-selected="true"
                        data-value={item.value}
                        role="option"
                    >
                        <span class="mdc-list-item__ripple" />
                        <span class="mdc-list-item__text">
                            {item.label}
                        </span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/if}

<style>
    @import url("@material/select/dist/mdc.select.min.css");
    li {
        padding: 12px;
    }
</style>
