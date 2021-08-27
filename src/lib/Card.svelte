<script lang="ts">
    import { onMount } from "svelte";

    let node: HTMLElement;
    let component: any;

    export let media_url = "";

    onMount(() => {
        //component = new MDCCard(node);
        return () => {
            component?.destroy();
        };
    });
</script>

<div
    bind:this={node}
    class="my-card__media mdc-card__media mdc-card__media--16-9"
>
    <div class="mdc-card__media-content">Title</div>

    <div class="mdc-card__actions">
        <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple" />
            <span class="mdc-button__label">Action 1</span>
        </button>
        <button class="mdc-button mdc-card__action mdc-card__action--button">
            <div class="mdc-button__ripple" />
            <span class="mdc-button__label">Action 2</span>
        </button>

        <button
            class="mdc-icon-button mdc-card__action mdc-card__action--icon"
            aria-pressed="false"
            aria-label="Add to favorites"
            title="Add to favorites"
        >
            <i
                class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on"
                >favorite</i
            >
            <i class="material-icons mdc-icon-button__icon">favorite_border</i>
        </button>
        <button
            class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
            title="Share">share</button
        >
        <button
            class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
            title="More options">more_vert</button
        >
    </div>
</div>

<style>
    @import url("@material/card/dist/mdc.card.min.css");
</style>
