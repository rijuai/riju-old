<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="container-fluid">
	<ul>
		<li><a href="/">Riju</a></li>
		<li>
			<a class="secondary" href="/dashboard/account" title="Account Settings"
				>Account</a
			>
		</li>
		{#if $page.url.pathname === '/dashboard/account'}
			<li>
				<a href="/dashboard" title="Go Back">Dashboard</a>
			</li>
		{/if}
	</ul>
	<ul>
		{#if $page.url.pathname === '/dashboard/presentation'}
			<li>
				<a class="secondary" href="/present" title="Present">Present</a>
			</li>
		{/if}
		{#if $page.url.pathname === '/dashboard'}
			<li>
				<a
					class="primary"
					href="/dashboard/presentation"
					role="button"
					title="Create Presentation"
				>
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>
