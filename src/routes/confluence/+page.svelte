<script lang="ts">
	import MetaData from '$lib/components/MetaData.svelte'
	import { changeTheme } from '$lib/stores/presenter'
	import { page } from '$app/stores'
	import { currentTheme } from '$lib/stores/presenter'
	import { Editor, type JSONContent } from '@tiptap/core'
	import Reveal from 'reveal.js'
	import 'reveal.js/dist/reveal.css'
	import { onMount } from 'svelte'
	import { supabase } from '$lib/config/supabase'
	import { Expand, Sparkles, X } from 'lucide-svelte'

	export let presentationId: string

	let reveal: Reveal.Api, htmlOutput: string, presentationContent: string

	const getPresentationId = () => {
		const id = $page.url.searchParams.get('id') ?? ''
		return id
	}

	const getPresentationContent = async (
		presentation_id: string,
	): Promise<any> => {
		const { data, error } = await supabase
			.from('confluence_presentations')
			.select('content')
			.eq('presentation_id', presentation_id)

		if (error) return console.log(error)
		return data![0].content
	}

	const showFullScreen = (element: Element) => {
		const requestFullScreen =
			element.requestFullscreen ||
			(element as any).mozRequestFullScreen ||
			(element as any).webkitRequestFullScreen ||
			(element as any).msRequestFullscreen

		requestFullScreen.call(element)
	}

	let log: string
	const summariseContent = async (content: string): Promise<string | void> => {
		let response = await fetch('/api/summarise', {
			method: 'POST',
			body: JSON.stringify({ content: content }),
			headers: {
				'Content-Type': 'application/json',
			},
		})

		let data = await response.json()
		log = JSON.stringify(data)
		console.log(data)
	}

	const convertContentToText = async (content: string) => {
		let editor = new Editor({
			onCreate: async () => {
				editor.commands.setContent(content)
			},
		})

		let text = editor.getText()
		return text
	}

	onMount(async () => {
		presentationId = getPresentationId()
		presentationContent = await getPresentationContent(presentationId!)

		if (presentationContent)
			// htmlOutput = convertContentToHtml(JSON.parse(presentationContent))

			reveal = new Reveal()

		reveal.initialize({
			controls: false,
			progress: true,
			history: false,
			center: true,
			transition: 'fade',
			embedded: true,
			autoAnimate: true,
			overview: false,
		})

		let text = convertContentToText(presentationContent)
	})
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<nav class="container-fluid w-full">
	<ul>
		<li class="text-xl">
			<a class="text-xl" href="/">Riju</a>
		</li>
	</ul>
	<ul>
		<li>
			<button
				class="secondary"
				on:click={() => {
					summariseContent(presentationContent)
				}}>Summarise</button
			>
		</li>
		<li>
			<a
				class="secondary"
				data-tooltip="Change Theme"
				data-placement="bottom"
				href="#change_theme=true"
				on:click={changeTheme}><Sparkles /> Theme</a
			>
		</li>
		<li>
			<a
				class="secondary"
				data-tooltip="View Fullscreen"
				data-placement="bottom"
				href="#full_screen=true"
				on:click={() => {
					let element = document.querySelector('.reveal')

					if (element !== null) {
						showFullScreen(element)
					}
				}}><Expand /></a
			>
		</li>
		<li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class="secondary cursor-pointer"
				data-tooltip="Exit"
				data-placement="bottom"
				on:click={() => {
					history.back()
				}}><X /></a
			>
		</li>
	</ul>
</nav>

<main class="reveal w-full aspect-video" style={$currentTheme}>
	<div class="slides">
		{@html htmlOutput}
	</div>
	<div id="editor" />

	<small class="bg-white rounded-md fixed bottom-4 right-4 p-2">
		Created in Riju
	</small>
</main>
