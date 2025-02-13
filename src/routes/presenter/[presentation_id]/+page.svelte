<script lang="ts">
import MetaTags from '$lib/components/MetaTags.svelte'
import type { PageData } from './$types'
import Navbar from './Navbar.svelte'
import Presenter from './Presenter.svelte'
import { currentTheme, isPresentationPublic, transitionType } from './store'

export let data: PageData

const { theme, isPublic, htmlOutput, presentationId } = data
$isPresentationPublic = isPublic

if (theme === null) {
	$currentTheme =
		'background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);'
} else if (
	typeof theme === 'object' &&
	'backgroundCss' in theme &&
	'transitionType' in theme
) {
	$currentTheme = theme.backgroundCss as string
	$transitionType = theme.transitionType as TransitionType
}
</script>

<MetaTags
    title="Riju | Present"
    description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>
<Navbar {presentationId} />
<Presenter {htmlOutput} />
