<script lang="ts">
	import { page } from '$app/stores'
	import MetaData from '$lib/components/MetaData.svelte'
	import Presenter from '$lib/components/Presenter.svelte'
	import PresenterNavbar from '$lib/components/PresenterNavbar.svelte'
	import { getFullPresentation } from '$lib/db/presentation'
	import { convertContentToHtml } from '$lib/engines/convertContentToHtml'
	import {
		currentTheme,
		isPresentationPublic,
		transitionType,
	} from '$lib/stores/presentation'
	import { Loader } from 'lucide-svelte'
	import { onDestroy, onMount } from 'svelte'

	let presentationId: string, htmlOutput: string

	onMount(async () => {
		presentationId = $page.params.presentation_id
		const { content, theme, is_public } = await getFullPresentation(
			presentationId,
		)

		if (theme === null) {
			$currentTheme = 'background-color: #fff;'
		} else {
			$currentTheme = theme.backgroundCss
			$transitionType = theme.transitionType
		}
		$isPresentationPublic = is_public

		htmlOutput = convertContentToHtml(content)
	})

	onDestroy(() => {
		$currentTheme = ''
		$isPresentationPublic = false
	})
</script>

<MetaData
	title="Riju | Present"
	description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<PresenterNavbar {presentationId} />

{#if htmlOutput}
	<Presenter {htmlOutput} />
{:else}
	<Loader class="fixed left-1/2 top-1/2 animate-spin" />
{/if}
