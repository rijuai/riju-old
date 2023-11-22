<script lang="ts">
	import { page } from '$app/stores'
	import Editor from '$lib/components/Editor.svelte'
	import HelpDialog from '$lib/components/HelpDialog.svelte'
	import MetaData from '$lib/components/MetaData.svelte'
	import * as Card from '$lib/components/ui/card'
	import * as Table from '$lib/components/ui/table'
	import { onMount } from 'svelte'

	let presentationId: string

	onMount(() => {
		presentationId = $page.params.presentation_id
	})
</script>

<MetaData
	title="Riju | Presentation"
	description="Create and edit presentations with Riju."
/>

<Editor {presentationId} />

<div class="fixed right-2 top-1/2 transform -translate-y-1/2 max-w-xs">
	<Card.Root>
		<Card.Header>
			<Card.Title>Keyword Shortcuts</Card.Title>
			<Card.Description
				>To use it just enter the keyword in new line and press space after the
				keyword.</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head>Feature</Table.Head>
						<Table.Head>Shortcut</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Heading 1</Table.Cell>
						<Table.Cell>#</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Heading 2</Table.Cell>
						<Table.Cell>##</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Heading 3</Table.Cell>
						<Table.Cell>###</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Bullet List</Table.Cell>
						<Table.Cell>-</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Numbered List</Table.Cell>
						<Table.Cell>1.</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>New Slide</Table.Cell>
						<Table.Cell>---</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell>Sub Section</Table.Cell>
						<Table.Cell>...</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Card.Content>
	</Card.Root>
</div>

<HelpDialog />
