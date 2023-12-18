<script lang="ts">
	import { Toggle } from '$lib/components/ui/toggle'
	import type { Editor } from '@tiptap/core'
	import { Bold, Italic, Strikethrough, UnderlineIcon } from 'lucide-svelte'

	export let editor: Editor
</script>

<Toggle
	size="sm"
	aria-label="toggle bold"
	pressed={editor.isActive('bold')}
	on:click={() => {
		editor.chain().focus().toggleBold().run()
	}}
>
	<Bold />
</Toggle>
<Toggle
	size="sm"
	aria-label="toggle italic"
	pressed={editor.isActive('italic')}
	on:click={() => {
		editor.chain().focus().toggleItalic().run()
	}}
>
	<Italic />
</Toggle>
<Toggle
	size="sm"
	aria-label="toggle underline"
	pressed={editor.isActive('underline')}
	on:click={() => {
		editor.chain().focus().toggleUnderline().run()
	}}
	><UnderlineIcon />
</Toggle>
<Toggle
	size="sm"
	aria-label="toggle strike"
	pressed={editor.isActive('strike')}
	on:click={() => {
		editor.chain().focus().toggleStrike().run()
	}}
	><Strikethrough />
</Toggle>
