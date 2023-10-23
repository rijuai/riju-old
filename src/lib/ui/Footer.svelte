<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte'
	import { Linkedin, Twitter, Youtube } from 'lucide-svelte'
</script>

<footer class="flex flex-col justify-center gap-6 py-8">
	<div class="flex justify-center gap-6">
		<a href="https://twitter.com/RijuPage"><Twitter /></a>
		<a href="https://www.youtube.com/channel/UCqCC3zl-WFdSujoAyKANCUg"
			><Youtube />
		</a>
		<a href="/"><Linkedin /></a>
	</div>
	<div class="flex justify-center gap-6 text-xs text-muted-foreground">
		<a href="/docs/contact">Contact</a>
		<a href="/docs/privacy">Privacy Policy</a>
		<a href="/docs/terms">Terms</a>
	</div>
</footer>
