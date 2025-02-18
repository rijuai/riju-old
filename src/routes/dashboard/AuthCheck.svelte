<script lang="ts">
import { goto } from '$app/navigation'
import pb from '$lib/pocketbase'
import { userId } from '$lib/stores/user'
import { onDestroy } from 'svelte'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

let isUserAuthenticated = $state(false)

const removeListener = pb.authStore.onChange((token, model) => {
	if (pb.authStore.isValid) {
		$userId = pb.authStore.model?.id
		isUserAuthenticated = true
	} else {
		goto('/')
	}
}, true)

onDestroy(() => {
	removeListener()
})
</script>

{#if isUserAuthenticated}
	{@render children?.()}
{/if}
