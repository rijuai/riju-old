<script lang="ts">
import { page } from '$app/state'
import { Button } from '$lib/components/ui/button'
</script>

<main class="grid h-screen place-items-center p-4 text-center">
	<div>
		<h1 class="mb-4 text-2xl font-bold">
			
			{page.status === 404 ? 'Page not found' : page.error?.message}
		</h1>
		<Button href="/">Return home</Button>
	</div>
</main>
