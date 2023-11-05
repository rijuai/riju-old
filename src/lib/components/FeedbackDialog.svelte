<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}
		>Give Feedback</Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Feedback</Dialog.Title>
			<Dialog.Description>
				<iframe
					class="w-full"
					height="600"
					title="Feedback Form"
					src="https://docs.google.com/forms/d/e/1FAIpQLSfksa49Eg1EXJh5UsHAPQfe_DwM-edRwn3sm186_K8RQX-9Fg/viewform?embedded=true"
					frameborder="0"
					marginheight="0"
					marginwidth="0">Loading…</iframe
				>
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
