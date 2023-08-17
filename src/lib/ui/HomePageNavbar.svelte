<script>
	import { IconMenu2 } from '@tabler/icons-svelte';
</script>

<nav class="container-fluid">
	<ul>
		<li><a class="text-xl" href="/">Riju</a></li>
	</ul>
	<ul>
		<li>
			<details class="dropdown">
				<summary>
					<IconMenu2 />
				</summary>
				<ul dir="rtl">
					<li><a href="/dashboard">Dashboard</a></li>
					<li><a href="/changelog">Changelog</a></li>
					<li><a href="/contact">Contact</a></li>
				</ul>
			</details>
		</li>
	</ul>
</nav>
