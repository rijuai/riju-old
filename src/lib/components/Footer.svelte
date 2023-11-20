<script lang="ts">
	import { Linkedin, Twitter, Youtube } from 'lucide-svelte'
</script>

<footer class="flex flex-col justify-center gap-6 py-8">
	<div class="flex justify-center gap-6">
		<a href="https://twitter.com/RijuPage" aria-label="Twitter"><Twitter /></a>
		<a
			href="https://www.youtube.com/channel/UCqCC3zl-WFdSujoAyKANCUg"
			aria-label="YouTube"><Youtube /></a
		>
		<a href="https://www.linkedin.com/company/rijuai" aria-label="LinkedIn"
			><Linkedin /></a
		>
	</div>
	<div class="flex justify-center gap-6 text-xs text-muted-foreground">
		<a href="/docs/contact">Contact</a>
		<a href="/docs/privacy">Privacy Policy</a>
		<a href="/docs/terms">Terms</a>
	</div>
</footer>
