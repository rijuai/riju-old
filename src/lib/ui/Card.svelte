<script lang="ts">
	export let title: string
</script>

<article>
	<header>
		<h1>{title}</h1>
	</header>
	<slot />
</article>
