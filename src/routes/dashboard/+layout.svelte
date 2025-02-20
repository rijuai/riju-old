<script lang="ts">
import AuthCheck from './AuthCheck.svelte'
import HelpDialog from './HelpDialog.svelte'
import Navbar from './Navbar.svelte'

let { children } = $props()
</script>

<AuthCheck>
    <main class="px-6 py-4 max-w-3xl mx-auto">
        <Navbar />

        {@render children()}

    <HelpDialog />
    </main>
</AuthCheck>
