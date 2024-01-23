<script lang="ts">
	import { page } from '$app/stores'
	import { Button } from '$lib/components/ui/button'
</script>

<main
	class="h-screen flex flex-col justify-center items-center text-center p-4"
>
	<h1 class="mb-4">{$page.status}: {$page.error?.message}</h1>
	<p class="mb-8 text-muted-foreground">
		This page doesn't exist. If you think there is something off, please contact
		us.
	</p>
	<Button href="/">Go back home</Button>
</main>
