<script lang="ts">
	import { page } from '$app/stores'
	import { PencilLine, Play, Settings } from 'lucide-svelte'
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/">Riju</a></li>
			</ul>
	<ul>
		{#if $page.url.pathname === '/dashboard/editor'}
			<li>
				<a class="secondary" href="/present" title="Present">
					<Play />
				</a>
			</li>
		{/if}
		{#if $page.url.pathname === '/dashboard'}
			<li>
				<a
					class="primary"
					href="/dashboard/editor"
					role="button"
					title="Create Presentation"
				>
					<PencilLine />
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>
