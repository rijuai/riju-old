<script lang="ts">
    import { Separator } from "$lib/components/ui/separator";
    import { Toggle } from "$lib/components/ui/toggle";
    import type { Editor } from "@tiptap/core";
    import {
        Bold,
        Italic,
        Sparkles,
        Strikethrough,
        UnderlineIcon,
    } from "lucide-svelte";
    import { onDestroy } from "svelte";

    export let editor: Editor;

    onDestroy(() => {
        console.log("Context Menu Destroyed");
    });
</script>

<Separator orientation="vertical" />
<Toggle
    size="sm"
    aria-label="toggle bold"
    pressed={editor.isActive("bold")}
    on:click={() => {
        editor.chain().focus().toggleBold().run();
    }}
>
    <Bold />
</Toggle>
<Toggle
    size="sm"
    aria-label="toggle italic"
    pressed={editor.isActive("italic")}
    on:click={() => {
        editor.chain().focus().toggleItalic().run();
    }}
>
    <Italic />
</Toggle>
<Toggle
    size="sm"
    aria-label="toggle underline"
    pressed={editor.isActive("underline")}
    on:click={() => {
        editor.chain().focus().toggleUnderline().run();
    }}
    ><UnderlineIcon />
</Toggle>
<Toggle
    size="sm"
    aria-label="toggle strike"
    pressed={editor.isActive("strike")}
    on:click={() => {
        editor.chain().focus().toggleStrike().run();
    }}
    ><Strikethrough />
</Toggle>

<style lang="postcss">
    :global(svg) {
        @apply h-4 w-4;
    }
</style>
