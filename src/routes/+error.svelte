<script lang="ts">
import { page } from '$app/stores'
import { Button } from '$lib/components/ui/button'
</script>

<main
	class="flex h-screen flex-col items-center justify-center p-4 text-center"
>
	<h1 class="mb-4">{$page.status}: {$page.error?.message}</h1>
	<p class="text-muted-foreground mb-8">
		This page doesn't exist. If you think there is something off, please contact
		us.
	</p>
	<Button href="/">Go back home</Button>
</main>
