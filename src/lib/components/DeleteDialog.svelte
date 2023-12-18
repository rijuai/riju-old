<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog'
	import { buttonVariants } from '$lib/components/ui/button'
	import {
		deletePresentation,
		getPresentationContent,
	} from '$lib/db/presentation'
	import type { JSONContent } from '@tiptap/core'

	export let presentationId: string
	let showLoader = false

	const deleteImagesInR2 = async (objectKeys: string[]) => {
		const result = await fetch('/api/image', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ objectKeys }),
		})
	}

	const deleteImages = async (editorOutput: JSONContent) => {
		const imagesToDelete: string[] = []

		editorOutput.forEach((item: Item) => {
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
	<AlertDialog.Trigger>Delete</AlertDialog.Trigger>
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
					showLoader = true
					let editorOutput = await getPresentationContent(presentationId)
					// await deleteImages(editorOutput)

					let result = await deletePresentation(presentationId)
					if (result) {
						console.log('Successfully deleted presentation')
					}
				}}>Delete</AlertDialog.Action
			>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
