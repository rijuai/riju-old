<script lang="ts">
	import { changeTheme } from '$lib/stores/presenter'
	import { Sparkles, X } from 'lucide-svelte'
</script>

<nav class="container-fluid fixed z-50 w-full">
	<ul>
		<li class="text-xl">
			<a class="text-xl" href="/">Riju</a>
		</li>
	</ul>
	<ul>
		<li>
			<a class="secondary" href="#change-theme" on:click={changeTheme}
				><Sparkles /> Theme</a
			>
		</li>
		<li>
			<a class="secondary" href="/dashboard/editor"><X /></a>
		</li>
	</ul>
</nav>
