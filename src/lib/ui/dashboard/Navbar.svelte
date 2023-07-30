<script lang="ts">
	import { PenBox, Play } from 'lucide-svelte';
</script>

<nav class="container-fluid">
	<ul>
		<li><a href="/">Riju</a></li>
	</ul>
	<ul>
		<li>
			<a class="secondary outline" href="/">Change Theme</a>
		</li>
		<li>
			<a class="secondary" href="/dashboard/present">
				<Play size="20" />
				Present</a
			>
		</li>
		<li>
			<a class="primary" href="/dashboard/presentation" role="button">
				<PenBox size="20" />
				Create</a
			>
		</li>
	</ul>
</nav>
