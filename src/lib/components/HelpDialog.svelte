<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button'
	import * as Dialog from '$lib/components/ui/dialog'
	import * as Table from '$lib/components/ui/table'
	import { HelpCircle } from 'lucide-svelte'
</script>

<Dialog.Root>
	<Dialog.Trigger
		class="fixed bottom-4 left-2 {buttonVariants({ variant: 'link' })}"
		><HelpCircle /></Dialog.Trigger
	>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Quick Documentation</Dialog.Title>
			<Dialog.Description>
				You can use below shortcuts to create presentation much faster. You can
				use these shortcuts by entering the shortcut + space.
			</Dialog.Description>
		</Dialog.Header>
		<div>
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
		</div>
		<Dialog.Footer>
			<Button variant="outline" href="/docs">View Full Documentation</Button>
			<Button variant="outline" href="/docs/contact">Contact Us</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
