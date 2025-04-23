<script lang="ts">
import AuthCheck from './AuthCheck.svelte'
import HelpDialog from './HelpDialog.svelte'
import Navbar from './Navbar.svelte'

let { children } = $props()
</script>

<AuthCheck>
    <main class="mx-auto max-w-2xl px-6 py-4">
        <Navbar />

        {@render children()}

        <HelpDialog />
    </main>
</AuthCheck>
