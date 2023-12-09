<script lang="ts">
	import { page } from '$app/stores'
	import MetaTags from '$lib/components/MetaTags.svelte'
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
	import { onMount } from 'svelte'

	let presentationId: string, htmlOutput: string

	onMount(async () => {
		presentationId = $page.params.presentation_id

		const { content, theme, is_public } =
			await getFullPresentation(presentationId)

		console.log(
			`is_public: ${is_public}, isPresentationPublic: ${isPresentationPublic}`,
		)

		$isPresentationPublic = is_public

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
