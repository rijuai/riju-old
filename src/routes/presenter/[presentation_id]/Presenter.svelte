<script lang="ts">
    import "$lib/assets/css/presenter.css";
    import WaterMark from "./WaterMark.svelte";
    import { currentTheme, transitionType } from "$lib/stores/presentation";
    import Reveal from "reveal.js";
    import "reveal.js/dist/reveal.css";
    import { onDestroy, onMount } from "svelte";

    export let htmlOutput: string;
    let reveal: Reveal.Api;

    onMount(async () => {
        reveal = new Reveal();

        reveal.initialize({
            embedded: true,
            controls: false,
            overview: false,
            progress: true,
            history: false,
            center: true,
            transition: "zoom",
            autoAnimate: true,
        });
    });

    $: {
        if (reveal) {
            reveal.configure({
                transition: $transitionType,
            });
        }
    }

    onDestroy(() => {
        reveal.destroy();
    });
</script>

<div class="reveal" style={$currentTheme}>
    <div class="slides">
        {@html htmlOutput}
    </div>
</div>

<WaterMark text="Made in Riju.ai" />

<style lang="postcss">
    .reveal {
        @apply h-screen w-full;
    }
</style>
