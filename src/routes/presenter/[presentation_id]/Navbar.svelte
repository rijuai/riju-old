<script lang="ts">
import { goto } from "$app/navigation"
import { Button } from "$lib/components/ui/button"
import Maximize from "lucide-svelte/icons/maximize"
import X from "lucide-svelte/icons/x"
import { onMount } from "svelte"
import SharePopup from "./SharePopup.svelte"
import ThemeSettingsPopup from "./ThemeSettingsPopup.svelte"

export let presentationId: string
const isUserSignedIn = false

const showFullScreen = (element: Element) => {
	const requestFullScreen =
		element.requestFullscreen ||
		(element as any).mozRequestFullScreen ||
		(element as any).webkitRequestFullScreen ||
		(element as any).msRequestFullscreen

	requestFullScreen.call(element)
}

onMount(async () => {
	// isUserSignedIn = await isUserAuthenticated();
})
</script>

<nav
    class="fixed top-0 z-10 flex w-full items-center justify-between bg-transparent p-2"
>
    <Button variant="link" class="text-xl" href="/">Riju</Button>
    <div class="flex gap-4">
        <!-- {#if isUserSignedIn} -->
        <SharePopup {presentationId} />
        <ThemeSettingsPopup {presentationId} />
        <!-- {/if} -->
        <Button
            variant="ghost"
            size="icon"
            on:click={() => {
                let element = document.querySelector(".reveal");

                if (element !== null) {
                    showFullScreen(element);
                }
            }}><Maximize class="size-4" /></Button
        >
        <!-- {#if isUserSignedIn} -->
        <Button
            variant="ghost"
            size="icon"
            on:click={() => {
                goto(`/dashboard/editor/${presentationId}`);
            }}><X class="size-4" /></Button
        >
        <!-- {/if} -->
    </div>
</nav>
