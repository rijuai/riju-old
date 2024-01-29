<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import { createPresentation } from "$lib/db/presentation";
    import { PencilLine, Play, Settings } from "lucide-svelte";
</script>

<!-- Tally forms script -->
<svelte:head>
    <script defer async src="https://tally.so/widgets/embed.js"></script>
</svelte:head>

<nav
    class="sticky top-0 z-10 flex items-center justify-between gap-1 bg-white px-2 py-3"
>
    <Button variant="link" class="text-2xl" href="/dashboard"
        >Riju
        <Badge variant="secondary" class="ml-2 bg-amber-200">Beta</Badge>
    </Button>
    <div class="flex gap-3">
        <Button
            class="hidden lg:block"
            variant="outline"
            data-tally-open="wAvyoN"
            data-tally-layout="modal"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave">Feedback</Button
        >
        {#key $page.url.pathname}
            {#if $page.url.pathname.includes("/editor")}
                <Button
                    variant="secondary"
                    on:click={() => {
                        const presentationId = $page.params.presentation_id;

                        goto(`/presenter/${presentationId}`);
                    }}
                >
                    <Play class="mr-1 size-4" />Present
                </Button>
            {/if}
            {#if $page.url.pathname === "/dashboard"}
                <Button variant="ghost" size="icon" href="/dashboard/settings"
                    ><Settings class="size-4" /></Button
                >
                <Button
                    on:click={async () => {
                        const presentationId = await createPresentation(
                            "Untitled Presentation",
                        );
                        goto(`/dashboard/editor/${presentationId}`);
                    }}
                >
                    <PencilLine class="mr-2 size-4" />
                    Create</Button
                >
            {/if}
        {/key}
    </div>
</nav>
