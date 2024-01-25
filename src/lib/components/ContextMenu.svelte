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
    import Button from "./ui/button/button.svelte";
    import Input from "./ui/input/input.svelte";

    export let editor: Editor;

    let showAiSearchBar = false;

    onDestroy(() => {
        console.log("Context Menu Destroyed");
        showAiSearchBar = false;
    });
</script>

{#if showAiSearchBar}
    <Toggle
        size="sm"
        aria-label="toggle strike"
        pressed={editor.isActive("strike")}
        class="font-normal text-fuchsia-600"
        on:click={() => {
            editor.chain().focus().toggleStrike().run();
        }}
        ><Sparkles class="mr-2" />Ask AI
    </Toggle>
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
{/if}

<Input
    class="hover::ring-0 w-full rounded-r-none"
    placeholder="Search for images"
    on:keydown={(e) => {
        if (e.key === "Enter") {
            showAiSearchBar = true;
        }
    }}
/>
<Button variant="secondary" class="rounded-l-none">Search</Button>
