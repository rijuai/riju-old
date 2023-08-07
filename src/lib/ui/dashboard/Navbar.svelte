<script lang="ts">
	import { page } from '$app/stores';
	import { LayoutDashboard, PenBox, Play, UserCircle2 } from 'lucide-svelte';
</script>

<nav class="container-fluid">
	<ul>
		<li><a href="/">Riju</a></li>
		<li>
			<a class="secondary" href="/dashboard/account">
				<UserCircle2 size="20" />
			</a>
		</li>
		<li>
			<a class="secondary" href="/dashboard">
				<LayoutDashboard size="20" />
			</a>
		</li>
	</ul>
	<ul>
		{#if $page.url.pathname === '/dashboard/presentation'}
			<li>
				<a class="secondary outline" href="/">Change Theme</a>
			</li>
			<li>
				<a class="secondary" href="/present">
					<Play size="20" />
				</a>
			</li>
		{/if}
		{#if $page.url.pathname === '/dashboard'}
			<li>
				<a class="primary" href="/dashboard/presentation" role="button">
					<PenBox size="20" />
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>
