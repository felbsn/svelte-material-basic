<script lang="ts">
    import { onMount } from "svelte";
    import { MDCTextField } from "@material/textfield";
    import type { Variant } from "./common/variant";

    export let variant: Variant = "filled";

    let node: HTMLElement;
    let component: MDCTextField;

    onMount(() => {
        component = new MDCTextField(node);
        return () => {
            component?.destroy();
        };
    });
</script>

{#if variant === "filled"}
    <label
        bind:this={node}
        class="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label"
    >
        <span class="mdc-text-field__ripple" />
        <span class="mdc-text-field__resizer">
            <textarea
                class="mdc-text-field__input"
                rows="8"
                cols="40"
                aria-label="Label"
            />
        </span>
        <span class="mdc-line-ripple" />
    </label>
{:else}
    <label
        bind:this={node}
        class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label"
    >
        <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading" />
            <span class="mdc-notched-outline__trailing" />
        </span>
        <span class="mdc-text-field__resizer">
            <textarea
                class="mdc-text-field__input"
                rows="8"
                cols="40"
                aria-label="Label"
            />
        </span>
    </label>
{/if}

<style>
    @import url("@material/textfield/dist/mdc.textfield.min.css");
</style>
