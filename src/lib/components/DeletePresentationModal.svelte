<script lang="ts">
	import { goto } from '$app/navigation'
	import { deletePresentation } from '$lib/db/presentation'
	import {
		currentPresentationId,
		currentPresentationTitle,
		showDeleteModal,
	} from '$lib/stores/editor'
</script>

<dialog open={$showDeleteModal}>
	<article class="max-w-md">
		<h2>Are you sure?</h2>
		<p>
			This is permanent! Are you sure you want to delete <b
				>{$currentPresentationTitle}</b
			>?
		</p>
		<footer>
			<button
				class="secondary"
				on:click={() => {
					$showDeleteModal = false
				}}>Cancel</button
			>
			<button
				on:click={async () => {
					let result = await deletePresentation($currentPresentationId)

					if (result) {
						console.log('Successfully deleted presentation')
						$showDeleteModal = false
						goto('/dashboard')
					}
				}}>Confirm</button
			>
		</footer>
	</article>
</dialog>
