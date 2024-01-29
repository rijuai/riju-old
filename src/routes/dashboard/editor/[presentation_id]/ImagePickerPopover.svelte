<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import * as Popover from "$lib/components/ui/popover";
    import { uploadToR2 } from "$lib/utils/uploadToR2";
    import type { Editor } from "@tiptap/core";
    import { Image, Search } from "lucide-svelte";

    export let editor: Editor;

    let fileInput: HTMLInputElement;

    let showSearchView = false;

    let query = "";
    let images: any = [];

    const handleImage = async (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (!target.files || target.files.length === 0) return;
        const file = target.files[0];

        const { imageUrl } = await uploadToR2(file);

        editor
            .chain()
            .focus()
            .setImage({ src: imageUrl })
            .createParagraphNear()
            .run();
        fileInput.value = "";
    };

    const getImagesFromPexels = async (query: string) => {
        const result = await fetch(`/api/pexels?query=${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!result.ok) console.log("Failed to get images from Pexels");

        const { photos } = await result.json();
        console.log(photos.photos);
        images = photos.photos;
    };
</script>

<Popover.Root>
    <Popover.Trigger>
        <Button variant="ghost" size="icon">
            <Image class="size-5" />
        </Button>
    </Popover.Trigger>
    <Popover.Content class="max-h-96">
        <div class="flex flex-col gap-4">
            {#if !showSearchView}
                <input
                    type="file"
                    id="imageInput"
                    style="display: none;"
                    bind:this={fileInput}
                    on:change={handleImage}
                />
                <Button variant="outline" on:click={() => fileInput.click()}
                    >Upload</Button
                >
                <Button
                    variant="outline"
                    on:click={() => {
                        showSearchView = true;
                    }}>Search</Button
                >
            {/if}

            {#if showSearchView}
                <Button
                    variant="outline"
                    on:click={() => {
                        showSearchView = false;
                    }}>Back</Button
                >
                <div class="flex gap-2">
                    <Input placeholder="Search for images" bind:value={query} />
                    <Button
                        variant="outline"
                        on:click={async () => {
                            await getImagesFromPexels(query);
                        }}><Search class="size-5" /></Button
                    >
                </div>
                <div class="grid h-64 grid-cols-2 gap-2 overflow-y-auto">
                    {#each images as image}
                        <button
                            on:click={() => {
                                editor
                                    .chain()
                                    .focus()
                                    .setImage({ src: image.src.original })
                                    .createParagraphNear()
                                    .run();
                            }}
                            ><img
                                src={image.src.tiny}
                                alt={image.src.photoGrapher}
                            /></button
                        >
                    {/each}
                </div>
            {/if}
        </div>
    </Popover.Content>
</Popover.Root>
