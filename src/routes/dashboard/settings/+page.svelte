<script lang="ts">
	import { supabase } from '$lib/config/supabase'
</script>

<section>
	<article class="mx-auto max-w-md">
		<header>
			<h1>Settings</h1>
		</header>
		<fieldset>
			<button
				class="secondary"
				on:click={async () => {
					await supabase.auth.signOut()

					window.location.href = '/'
				}}>Sign Out</button
			>
		</fieldset>
	</article>
</section>
