<script lang="ts">
	import { page } from '$app/stores'
	import { onMount } from 'svelte'

	export let title: string,
		description: string,
		keywords = ''

	let url: string

	onMount(() => {
		url = String($page.url)
	})
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta property="og:type" content="website" />
	<meta property="og: title" content={title} />
	<meta property="og:description" content={description} />
	<!-- ! update meta tags -->
	<!-- <meta property="og: image" content="https://shipfa.st/shareMain png" /> -->
	<meta property="og:url" content={url} />
	<!-- <meta name="twitter:card" content="summary_large_image" /> -->
	<meta name="twitter:creator" content="@_vigneshaithal" />
	<link rel="canonical" href={url} />
</svelte:head>
