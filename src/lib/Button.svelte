<script lang="ts">
    import { onMount, SvelteComponent } from "svelte";
    import { MDCRipple } from "@material/ripple";
    import type { ButtonVariant } from "./common/variant";

    export let variant: ButtonVariant = "filled";
    export let disabled = false;
    export let icon: SvelteComponent | null = null;
    export let fullWidth = false;

    let node: HTMLElement;
    let component: MDCRipple;

    onMount(() => {
        component = new MDCRipple(node);

        return () => {
            component?.destroy();
        };
    });
</script>

<button
    class="mdc-button"
    on:click
    bind:this={node}
    {disabled}
    class:mdc-button--raised={variant == "raised"}
    class:mdc-button--outlined={variant == "outlined"}
>
    {#if icon}
        <i class="mdc-button__icon" aria-hidden="true">
            <svelte:component this={icon} />
        </i>
    {/if}

    <span class="mdc-button__ripple" />
    <span class="mdc-button__label"> <slot /></span>
</button>

<style lang="scss">
    @import url("@material/button/dist/mdc.button.min.css");
</style>
