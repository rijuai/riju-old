<script lang="ts">
	import { goto } from '$app/navigation'
	import * as AlertDialog from '$lib/components/ui/alert-dialog'
	import { Button, buttonVariants } from '$lib/components/ui/button'
	import { deletePresentation } from '$lib/db/presentation'
	import { currentPresentationId } from '$lib/stores/editor'
	import { Trash2 } from 'lucide-svelte'
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost"><Trash2 /></Button>
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will permanently delete this
				presentation.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action
				class={buttonVariants({ variant: 'destructive' })}
				on:click={async () => {
					let result = await deletePresentation($currentPresentationId)

					if (result) {
						console.log('Successfully deleted presentation')
						goto('/dashboard')
					}
				}}>Delete</AlertDialog.Action
			>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
