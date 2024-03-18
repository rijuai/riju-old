<script lang="ts">
    import { goto } from "$app/navigation";
    import pb from "$lib/pocketbase";
    import { onDestroy } from "svelte";
    import { userId } from "$lib/stores/user";

    let isUserAuthenticated = false;

    const removeListener = pb.authStore.onChange((token, model) => {
        if (pb.authStore.isValid) {
            $userId = pb.authStore.model?.id;
            isUserAuthenticated = true;
        } else {
            goto("/");
        }
    }, true);

    onDestroy(() => {
        removeListener();
    });
</script>

{#if isUserAuthenticated}
    <slot />
{/if}
