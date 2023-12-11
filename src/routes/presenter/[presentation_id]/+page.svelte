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
			$currentTheme = theme.backgroundCss
			$transitionType = theme.transitionType
		}

		htmlOutput = convertContentToHtml(content)
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
