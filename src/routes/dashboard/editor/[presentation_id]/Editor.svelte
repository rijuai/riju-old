<script lang="ts">
    import EditorJS, { type OutputData } from "@editorjs/editorjs";
    import Header from "@editorjs/header";
    import { supabase } from "$lib/config/supabase";
    import NewSlide from "./newSlide";
    import ImageTool from "@editorjs/image";
    import NestedList from "@editorjs/nested-list";
    import { uploadToR2 } from "$lib/utils/uploadToR2";
    import { onMount } from "svelte";
    import SplitSlide from "./splitSide";

    export let presentationId: string;
    export let content: OutputData;

    let debounceTimer: NodeJS.Timeout;

    const editor = new EditorJS({
        placeholder: "Enter '/'  for commands",
        holder: "editor",
        onReady: async () => {
            editor.render(content);
        },
        onChange: async () => {
            const outputData = await editor.save();
            const title = outputData.blocks[0].data.text;
            const currentTime = new Date().toISOString();

            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(async () => {
                await updatePresentation(
                    presentationId,
                    currentTime,
                    title,
                    outputData,
                );
            }, 500);
        },

        tools: {
            heading: {
                class: Header,
                config: {
                    placeholder: "Enter a header",
                    levels: [1, 2],
                    defaultLevel: 1,
                },
                toolbox: [
                    {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-1"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="m17 12 3-2v8"/></svg>`,
                        title: "Heading 1",
                        data: {
                            level: 1,
                        },
                    },
                    {
                        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heading-2"><path d="M4 12h8"/><path d="M4 18V6"/><path d="M12 18V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/></svg>`,
                        title: "Heading 2",
                        data: {
                            level: 2,
                        },
                    },
                ],
            },
            nestedList: {
                class: NestedList,
                inlineToolbar: true,
            },
            newSlide: {
                class: NewSlide,
            },
            splitSlide: {
                class: SplitSlide,
            },
            image: {
                class: ImageTool,
                config: {
                    uploader: {
                        async uploadByFile(file: File) {
                            const result = await uploadToR2(file);
                            return {
                                success: 1,
                                file: {
                                    url: result.url,
                                },
                            };
                        },
                    },
                },
            },
        },
    });

    const updatePresentation = async (
        presentationId: string,
        updatedAt: string,
        title: string,
        content: JSON,
    ) => {
        const { error } = await supabase
            .from("presentations")
            .update({ title: title, content: content, updated_at: updatedAt })
            .eq("id", presentationId);
        console.log(error);

        return error ? false : true;
    };

    onMount(async () => {
        await editor.isReady;
    });
</script>

<div
    class="prose prose-base prose-headings:font-medium prose-h1:text-3xl prose-h2:text-2xl mx-auto max-w-2xl"
    id="editor"
/>
