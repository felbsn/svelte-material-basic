<script lang="ts">
    import { onMount } from "svelte";
    import { MDCTextField } from "@material/textfield";

    export let variant: "filled" | "outlined" = "filled";
    export let label: string;
    export let value: string = "";
    export let fullWidth = false;
    export let name = "";

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
        class="mdc-text-field mdc-text-field--filled"
        class:mdc-text-field--fullwidth={fullWidth}
    >
        <span class="mdc-text-field__ripple" />
        <span class="mdc-floating-label">{label}</span>
        <input class="mdc-text-field__input" type="text" bind:value {name} />
        <span class="mdc-line-ripple" />
    </label>
{:else}
    <label
        bind:this={node}
        class="mdc-text-field mdc-text-field--outlined"
        class:mdc-text-field--fullwidth={fullWidth}
    >
        <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading" />
            <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label">{label}</span>
            </span>
            <span class="mdc-notched-outline__trailing" />
        </span>
        <input
            type="text"
            class="mdc-text-field__input"
            aria-labelledby="my-label-id"
            {name}
            bind:value
        />
    </label>
{/if}

<style lang="scss">
    @import "styles/textfield";
</style>
