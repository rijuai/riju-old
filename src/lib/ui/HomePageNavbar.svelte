<script lang="ts">
	import { Menu } from 'lucide-svelte'
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/">Riju</a></li>
	</ul>
	<ul>
		<li>
			<details class="dropdown">
				<summary><Menu /></summary>
				<ul dir="rtl">
					<li><a href="/dashboard">Dashboard</a></li>
					<li><a href="/docs/contact">Contact</a></li>
				</ul>
			</details>
		</li>
	</ul>
</nav>
