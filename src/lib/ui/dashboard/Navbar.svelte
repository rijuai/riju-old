<script lang="ts">
	import { LayoutDashboard, PenBox, Play, UserCircle2 } from 'lucide-svelte';
</script>

<nav class="container-fluid">
	<ul>
		<li><a href="/">Riju</a></li>
		<li>
			<a class="secondary" href="/dashboard">
				<UserCircle2 size="24" />
			</a>
		</li>
		<li>
			<a class="secondary" href="/dashboard">
				<LayoutDashboard size="24" />
			</a>
		</li>
	</ul>
	<ul>
		<li>
			<a class="secondary outline" href="/">Change Theme</a>
		</li>
		<li>
			<a class="secondary" href="/present">
				<Play size="24" />
			</a>
		</li>
		<li>
			<a class="primary" href="/dashboard/presentation" role="button">
				<PenBox size="24" />
				Create</a
			>
		</li>
	</ul>
</nav>
