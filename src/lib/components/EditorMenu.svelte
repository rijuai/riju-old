<script lang="ts">
    import ImagePicker from "$lib/components/ImagePicker.svelte";
    import { Button } from "$lib/components/ui/button";
    import { Toggle } from "$lib/components/ui/toggle";
    import * as Tooltip from "$lib/components/ui/tooltip";
    import type { Editor } from "@tiptap/core";
    import {
        CaseSensitive,
        Heading1,
        Heading2,
        List,
        ListOrdered,
        MoveHorizontal,
        Plus,
        Redo,
        Undo,
    } from "lucide-svelte";

    export let editor: Editor;
</script>

<div
    class="menu bg-primary-foreground sticky top-14 z-20 flex justify-between gap-2 rounded-b-none rounded-t-lg border p-2"
>
    <div class="flex gap-1.5">
        <Tooltip.Root openDelay={150}>
            <Tooltip.Trigger>
                <Toggle
                    size="default"
                    aria-label="toggle new slide"
                    on:click={() => {
                        editor
                            .chain()
                            .focus()
                            .enter()
                            .setHorizontalRule()
                            .run();
                    }}
                >
                    <Plus class="size-5" />
                </Toggle>
            </Tooltip.Trigger>
            <Tooltip.Content>
                <p>New slide</p>
            </Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root openDelay={150}>
            <Tooltip.Trigger>
                <Button
                    variant="ghost"
                    size="icon"
                    on:click={async () => {
                        editor.chain().focus().enter().setSubSection().run();
                    }}
                >
                    <MoveHorizontal class="size-5" />
                </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                <p>Split slide</p>
            </Tooltip.Content>
        </Tooltip.Root>
        <Toggle
            size="default"
            aria-label="toggle heading 1"
            on:click={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
            }}><Heading1 class="size-5" /></Toggle
        >
        <Toggle
            size="default"
            aria-label="toggle heading 2"
            on:click={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
            }}><Heading2 class="size-5" /></Toggle
        >
        <Toggle
            size="default"
            aria-label="toggle paragraph"
            on:click={() => {
                editor.chain().focus().setParagraph().run();
            }}><CaseSensitive class="size-5" /></Toggle
        >
        <Toggle
            size="default"
            aria-label="toggle bullet list"
            on:click={() => {
                editor.chain().focus().toggleBulletList().run();
            }}><List class="size-5" /></Toggle
        >
        <Toggle
            size="default"
            aria-label="toggle ordered list"
            on:click={() => {
                editor.chain().focus().toggleOrderedList().run();
            }}
        >
            <ListOrdered class="size-5" />
        </Toggle>

        <ImagePicker {editor} />
    </div>
    <div class="flex gap-1">
        <Button
            size="icon"
            variant="ghost"
            on:click={() => {
                editor.commands.undo();
            }}
        >
            <Undo class="text-muted-foreground size-5" />
        </Button>
        <Button
            size="icon"
            variant="ghost"
            on:click={() => {
                editor.commands.redo();
            }}
        >
            <Redo class="text-muted-foreground size-5" />
        </Button>
    </div>
</div>
