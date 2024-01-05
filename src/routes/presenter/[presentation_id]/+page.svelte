<script lang="ts">
	import { page } from '$app/stores'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import Presenter from '$lib/components/Presenter.svelte'
	import PresenterNavbar from '$lib/components/PresenterNavbar.svelte'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import {
		currentTheme,
		isPresentationPublic,
		transitionType,
	} from '$lib/stores/presentation'
	import type { JSONContent } from '@tiptap/core'
	import { Loader } from 'lucide-svelte'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'

	let presentationId: string, htmlOutput: string
	export let data: PageData
	const { content, theme, isPublic } = data

	onMount(async () => {
		presentationId = $page.params.presentation_id
		$isPresentationPublic = isPublic

		if (theme === null) {
			$currentTheme =
				'background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);'
		} else {
			if (
				typeof theme === 'object' &&
				'backgroundCss' in theme &&
				'transitionType' in theme
			) {
				$currentTheme = theme.backgroundCss as string
				$transitionType = theme.transitionType as any
			}
		}

		htmlOutput = convertContentToHtml(content as JSONContent[])
	})
</script>

<MetaTags
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar {presentationId} />

{#if htmlOutput}
	<Presenter {htmlOutput} />
{:else}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{/if}
