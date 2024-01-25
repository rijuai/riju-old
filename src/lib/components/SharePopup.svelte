<script lang="ts">
    import { page } from "$app/stores";
    import { Button } from "$lib/components/ui/button";
    import Label from "$lib/components/ui/label/label.svelte";
    import * as Popover from "$lib/components/ui/popover";
    import { Switch } from "$lib/components/ui/switch";
    import { supabase } from "$lib/config/supabase";
    import { isPresentationPublic } from "$lib/stores/presentation";

    export let presentationId: string;

    const updatePresentationVisibility = async (
        presentationId: string,
        isPublic: boolean,
    ): Promise<boolean> => {
        const { error } = await supabase
            .from("presentations")
            .update({ is_public: isPublic })
            .eq("id", presentationId);

        return error ? false : true;
    };

    $: {
        updatePresentationVisibility(presentationId, $isPresentationPublic);
    }
</script>

<Popover.Root>
    <Popover.Trigger>Share</Popover.Trigger>
    <Popover.Content class="w-fi">
        <div class="flex flex-col gap-6">
            <div class="grid grid-cols-2 items-center gap-2">
                <Label>Make public</Label>
                <div class="flex items-center gap-2">
                    <Switch bind:checked={$isPresentationPublic} />
                    {#if $isPresentationPublic}
                        <Button
                            variant="outline"
                            size="sm"
                            class="h-full px-1.5 py-0.5 text-xs"
                            on:click={() => {
                                let url = $page.url;

                                /* ** copy to clipboard */
                                navigator.clipboard.writeText(String(url));
                            }}>Copy URL</Button
                        >
                    {/if}
                </div>
            </div>
        </div>
    </Popover.Content>
</Popover.Root>
