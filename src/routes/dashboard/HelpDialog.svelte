<script lang="ts">
import { goto } from '$app/navigation'
import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
import { signOut } from '$lib/stores/auth'
import CircleHelp from 'lucide-svelte/icons/circle-help'

const handleSignOut = async () => {
	const success = await signOut()
	if (success) {
		// Redirect to home page after successful logout
		goto('/')
	}
}
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class="fixed bottom-6 left-6"
		><CircleHelp class="size-10" /></DropdownMenu.Trigger
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
				onclick={handleSignOut}>Sign Out</DropdownMenu.Item
			>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
