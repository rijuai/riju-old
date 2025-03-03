<script lang="ts">
import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
import pb from '$lib/pocketbase'
import CircleHelp from 'lucide-svelte/icons/circle-help'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="fixed bottom-6 left-6"
		><CircleHelp class="size-8" /></DropdownMenu.Trigger
	>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.Item href="/dashboard/settings">Settings</DropdownMenu.Item>
			<DropdownMenu.Item
				data-tally-open="wAvyoN"
				data-tally-layout="modal"
				data-tally-emoji-text="👋"
				data-tally-emoji-animation="wave">Feedback</DropdownMenu.Item
			>
			<DropdownMenu.Item href="/contact">Contact Us</DropdownMenu.Item>
			<DropdownMenu.Item
				onclick={() => {
					pb.authStore.clear()
				}}>Sign Out</DropdownMenu.Item
			>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
