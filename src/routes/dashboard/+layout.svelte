<script lang="ts">
import AuthCheck from './AuthCheck.svelte'
import HelpDialog from './HelpDialog.svelte'
import Navbar from './Navbar.svelte'
interface Props {
	children?: import('svelte').Snippet
}

let { children }: Props = $props()
</script>

<AuthCheck>
    <Navbar />

    <main class="px-6 py-4">
        {@render children?.()}
    </main>

    <HelpDialog />
</AuthCheck>
