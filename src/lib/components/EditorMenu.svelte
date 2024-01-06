<script lang="ts">
	import ImagePickerPopover from '$lib/components/ImagePickerPopover.svelte'
	import { Button } from '$lib/components/ui/button'
	import * as Tooltip from '$lib/components/ui/tooltip'
	import type { Editor } from '@tiptap/core'
	import {
		CaseSensitive,
		Heading1,
		Heading2,
		List,
		ListOrdered,
		MoveHorizontal,
		Plus,
	} from 'lucide-svelte'

	export let editor: Editor
</script>

<div
	class="menu z-50 flex flex-col gap-3 p-1.5 min-w-fit fixed left-0 top-1/2 transform -translate-y-1/2 bg-primary-foreground border rounded-r"
>
	<Tooltip.Root openDelay={150}>
		<Tooltip.Trigger>
			<Button
				variant="ghost"
				size="icon"
				on:click={async () => {
					editor.chain().focus().enter().setHorizontalRule().run()
				}}
			>
				<Plus class="h-5 w-5" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>New slide</p>
		</Tooltip.Content>
	</Tooltip.Root>
	<Tooltip.Root openDelay={150}>
		<Tooltip.Trigger>
			<Button
				variant="ghost"
				size="icon"
				on:click={async () => {
					editor.chain().focus().enter().setSubSection().run()
				}}
			>
				<MoveHorizontal class="h-5 w-5" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Split slide</p>
		</Tooltip.Content>
	</Tooltip.Root>
	<Button
		variant="ghost"
		size="icon"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 1 }).run()
		}}><Heading1 class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		size="icon"
		on:click={() => {
			editor.chain().focus().toggleHeading({ level: 2 }).run()
		}}><Heading2 class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		size="icon"
		on:click={() => {
			editor.chain().focus().setParagraph().run()
		}}><CaseSensitive class="h-5 w-5" /></Button
	>
	<Button
		variant="ghost"
		size="icon"
		on:click={() => {
			editor.chain().focus().toggleBulletList().run()
		}}><List /></Button
	>
	<Button
		variant="ghost"
		size="icon"
		on:click={() => {
			editor.chain().focus().toggleOrderedList().run()
		}}
	>
		<ListOrdered />
	</Button>
	<ImagePickerPopover {editor} />
</div>
