<script lang="ts">
    import "../app.css";
    import { initAuth } from "$lib/stores/auth";
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        initAuth();
    });
</script>

<div class="bg-yellow-300 text-slate-800 font-semibold p-3 text-center text-sm">
    Currently Riju is in Alpha. Give your feedback -> <a
        class="underline"
        href="https://tally.so/r/wAvyoN">click here</a
    > (We're always listening).
</div>
{@render children()}
