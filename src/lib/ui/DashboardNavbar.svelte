<script lang="ts">
	import { page } from '$app/stores';
	import ChangeThemeModal from '$lib/components/ChangeThemeModal.svelte';
	import { isModalOpenStore } from '$lib/stores/modalStore';
	import {
		IconLayoutDashboard,
		IconPencil,
		IconPlayerPlayFilled,
		IconSparkles,
		IconUserCircle,
	} from '@tabler/icons-svelte';
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/">Riju</a></li>
		<li>
			<a class="secondary" href="/dashboard/account" title="Account Settings">
				<IconUserCircle />
			</a>
		</li>
		<!-- {#if $page.url.pathname === '/dashboard/account'} -->
		<li>
			<a class="secondary outline" href="/dashboard" title="Go Back">
				<IconLayoutDashboard />
			</a>
		</li>
		<!-- {/if} -->
	</ul>
	<ul>
		{#if $page.url.pathname === '/dashboard/presentation'}
			<li>
				<a
					class="secondary outline"
					href="#modal-open"
					title="Open Theme Modal"
					on:click={() => {
						$isModalOpenStore = true;
					}}
				>
					<IconSparkles />
					Theme</a
				>
			</li>
			<li>
				<a class="secondary" href="/present" title="Present">
					<IconPlayerPlayFilled />
				</a>
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
					<IconPencil />
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>

<ChangeThemeModal />
