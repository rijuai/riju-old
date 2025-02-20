<script lang="ts">
import { goto } from '$app/navigation'
import pb from '$lib/pocketbase'
import { userId } from '$lib/stores/user'
import { onDestroy } from 'svelte'

let { children } = $props()
let isUserAuthenticated = $state(false)

const removeListener = pb.authStore.onChange(() => {
	if (pb.authStore.isValid) {
		$userId = pb.authStore.record?.id ?? null
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
	{@render children()}
{/if}
