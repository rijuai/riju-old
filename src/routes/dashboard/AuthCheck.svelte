<script lang="ts">
    import { goto } from "$app/navigation";
    import pb from "$lib/pocketbase";
    import { onDestroy, onMount } from "svelte";
    import { userId } from "$lib/stores/user";

    let isUserAuthenticated = false;

    const removeListener = pb.authStore.onChange((token, model) => {
        console.log("New store data 1:", token, model);
        $userId = model?.id;
    });

    onMount(async () => {
        if (pb.authStore.isValid) {
            $userId = pb.authStore.model?.id;
            isUserAuthenticated = true;
        } else {
            goto("/signin");
        }
    });

    onDestroy(() => {
        removeListener();
    });
</script>

{#if isUserAuthenticated}
    <slot />
{/if}
