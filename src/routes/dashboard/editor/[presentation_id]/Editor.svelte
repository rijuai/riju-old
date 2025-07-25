<script lang="ts">
import supabase from '$lib/supabase'
import EditorJS, { type OutputData } from '@editorjs/editorjs'
import Header from '@editorjs/header'
import NestedList from '@editorjs/nested-list'
import Table from '@editorjs/table'
import { onMount } from 'svelte'
import CustomImage from './CustomImage'
import NewSlide from './newSlide'
import SplitSlide from './splitSide'
let { presentationId, content } = $props()

let debounceTimer: NodeJS.Timeout

const editor = new EditorJS({
	placeholder: "Enter '/'  for commands",
	holder: 'editor',
	onReady: async () => {
		editor.render(content)
	},
	onChange: async () => {
		const outputData = await editor.save()
		const title = outputData.blocks[0].data.text

		clearTimeout(debounceTimer)
		debounceTimer = setTimeout(async () => {
			const data = {
				title: title,
				content: outputData
			}

			const record = await supabase
				.from('presentations')
				.update(data)
				.eq('id', presentationId)
		}, 500)
	},

	tools: {
		heading: {
			class: Header,
			config: {
				placeholder: 'Enter a header',
				levels: [1, 2],
				defaultLevel: 1
			},
			toolbox: [
				{
					icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>`,
					title: 'Heading 1',
					data: {
						level: 1
					}
				},
				{
					icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>`,
					title: 'Heading 2',
					data: {
						level: 2
					}
				}
			]
		},
		nestedList: {
			class: NestedList,
			inlineToolbar: true
		},
		newSlide: {
			class: NewSlide
		},
		splitSlide: {
			class: SplitSlide
		},
		image: {
			class: CustomImage,
			config: {
				uploader: {
					async uploadByFile(file: File) {
						const { data, error } = await supabase.storage
							.from('images')
							.upload(file.name, file)
						return {
							success: 1,
							file: {
								url: data?.fullPath
							}
						}
					}
				}
			}
		},
		table: {
			class: Table
		}
	}
})

onMount(async () => {
	await editor.isReady
})
</script>

<div class="mx-auto max-w-2xl" id="editor"></div>
