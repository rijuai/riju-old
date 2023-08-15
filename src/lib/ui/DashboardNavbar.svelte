<script lang="ts">
	import { page } from '$app/stores';
	import ChangeThemeModal from '$lib/components/ChangeThemeModal.svelte';
	import { isModalOpenStore } from '$lib/stores/modal_store';
	import { ArrowLeft, PenBox, Play } from 'lucide-svelte';
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-2xl" href="/">Riju</a></li>
		<!-- <li>
			<a class="secondary" href="/dashboard/account" title="Account Settings">
				<Settings />
			</a>
		</li> -->
		{#if $page.url.pathname === '/dashboard/account'}
			<li>
				<a class="secondary outline" href="/dashboard" title="Go Back">
					<ArrowLeft />
				</a>
			</li>
		{/if}
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
					}}>Theme</a
				>
			</li>
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
					href="/dashboard/presentation"
					role="button"
					title="Create Presentation"
				>
					<PenBox />
					Create</a
				>
			</li>
		{/if}
	</ul>
</nav>

<ChangeThemeModal />
