<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import * as AlertDialog from '$lib/components/ui/alert-dialog'
	import { Button, buttonVariants } from '$lib/components/ui/button'
	import { deletePresentation } from '$lib/db/presentation'
	import { editorOutput } from '$lib/stores/presentation'
	import { Trash2 } from 'lucide-svelte'
	import { onMount } from 'svelte'

	let presentationId: string

	onMount(() => {
		presentationId = $page.params.presentation_id
	})

	const deleteImagesInR2 = async (objectKeys: string[]) => {
		const result = await fetch('/api/image', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ objectKeys }),
		})
	}

	const deleteImages = async () => {
		const imagesToDelete: string[] = []

		$editorOutput.forEach((item: Item) => {
			if (item.type === 'image') {
				const url = item.attrs.src
				const path = url.split('/').pop() ?? ''

				imagesToDelete.push(path)
			}
		})

		await deleteImagesInR2(imagesToDelete)
	}
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
					await deleteImages()

					let result = await deletePresentation(presentationId)
					if (result) {
						console.log('Successfully deleted presentation')
						goto('/dashboard')
					}
				}}>Delete</AlertDialog.Action
			>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
