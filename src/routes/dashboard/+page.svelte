<script lang="ts">
    import { goto } from "$app/navigation";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import * as Table from "$lib/components/ui/table";
    import { supabase } from "$lib/config/supabase";
    import {
        createPresentation,
        getPresentationContent,
    } from "$lib/db/presentation";
    import ExternalLink from "lucide-svelte/icons/external-link";
    import MoreHorizontal from "lucide-svelte/icons/more-horizontal";
    import Trash2 from "lucide-svelte/icons/trash-2";
    import type { PageData } from "./$types";
    import type { OutputData } from "@editorjs/editorjs";
    import { templates } from "./templates";
    import Button from "$lib/components/ui/button/button.svelte";

    export let data: PageData;
    $: ({ presentations } = data);

    const deletePresentation = async (presentationId: string) => {
        const { error } = await supabase
            .from("presentations")
            .delete()
            .eq("id", presentationId);

        return error ? false : true;
    };

    const deleteImagesInR2 = async (objectKeys: string[]) => {
        const result = await fetch("/api/r2", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ objectKeys }),
        });
    };

    const deleteImages = async (editorOutput: OutputData) => {
        const imagesToDelete: string[] = [];
        const blocks = editorOutput.blocks;

        if (!editorOutput) return;

        blocks.forEach((item: any) => {
            if (item.type === "image") {
                const url = item.data.file.url;
                const path = url.split("/").pop() ?? "";

                imagesToDelete.push(path);
            }
        });

        await deleteImagesInR2(imagesToDelete);
    };
</script>

<MetaTags title="Riju | Dashboard" description="Your presentations" />

<div class="mx-auto w-full max-w-4xl space-y-8">
    <!-- Templates -->
    <div>
        <h5 class="text-muted-foreground mb-4 font-medium">Templates</h5>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            {#each templates as { name, theme, content }}
                <Button
                    variant="outline"
                    class="p-12"
                    on:click={async () => {
                        const presentationId = await createPresentation(
                            name,
                            content,
                            theme,
                        );
                        goto(`/dashboard/editor/${presentationId}`);
                    }}>{name}</Button
                >
            {/each}
        </div>
    </div>

    <!-- Presentations -->
    {#if presentations && presentations.length > 0}
        <h5 class="text-muted-foreground mb-4 font-medium">
            Your presentations
        </h5>
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.Head>#</Table.Head>
                    <Table.Head colspan={2}>Title</Table.Head>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {#each presentations as { id, title }, index}
                    <Table.Row
                        class="cursor-pointer"
                        on:click={() => goto(`/dashboard/editor/${id}`)}
                    >
                        <Table.Cell class="font-normal">{++index}</Table.Cell>
                        <Table.Cell class="text-ellipsis">{title}</Table.Cell>
                        <Table.Cell
                            class="text-right"
                            on:click={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                    <MoreHorizontal class="h-4 w-4" />
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                    <DropdownMenu.Group>
                                        <DropdownMenu.Item
                                            on:click={() => {
                                                window.open(
                                                    `/dashboard/editor/${id}`,
                                                    "_blank",
                                                );
                                            }}
                                            ><ExternalLink
                                                class="mr-3 size-4"
                                            />Open in new tab</DropdownMenu.Item
                                        >
                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item
                                            class="text-destructive"
                                            on:click={async () => {
                                                let editorOutput =
                                                    await getPresentationContent(
                                                        id,
                                                    );
                                                await deleteImages(
                                                    editorOutput?.content,
                                                );

                                                let result =
                                                    await deletePresentation(
                                                        id,
                                                    );
                                                if (result) {
                                                    console.log(
                                                        "Successfully deleted presentation",
                                                    );

                                                    location.reload();
                                                }
                                            }}
                                            ><Trash2
                                                class="mr-3 size-4"
                                            />Delete</DropdownMenu.Item
                                        >
                                    </DropdownMenu.Group>
                                </DropdownMenu.Content>
                            </DropdownMenu.Root>
                        </Table.Cell>
                    </Table.Row>
                {/each}
            </Table.Body>
        </Table.Root>
    {:else}
        <p class="text-center">No presentations to show.</p>
    {/if}
</div>
