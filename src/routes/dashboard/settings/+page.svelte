<script lang="ts">
	import { goto } from '$app/navigation'
	import { signOut } from '$lib/db/auth'
</script>

<section>
	<article class="mx-auto max-w-sm">
		<header>
			<h1>Settings</h1>
		</header>
		<fieldset>
			<div class="flex justify-end">
				<button
					class="secondary"
					on:click={async () => {
						await signOut()
						goto('/')
					}}>Sign Out</button
				>
			</div>
		</fieldset>
	</article>
</section>
