<script lang="ts">
	export let title: string, description: string
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>
