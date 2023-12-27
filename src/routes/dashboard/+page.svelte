<script lang="ts">
  import { goto } from "$app/navigation";
  import MetaTags from "$lib/components/MetaTags.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Table from "$lib/components/ui/table";
  import { driver } from "driver.js";
  import "driver.js/dist/driver.css";


  import {
    createPresentation,
    deletePresentation,
    getPresentationContent,
  } from "$lib/db/presentation";
  import { templates } from "$lib/utils/templates";
  import type { JSONContent } from "@tiptap/core";
  import { ExternalLink, MoreHorizontal, Trash2 } from "lucide-svelte";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  export let data: PageData;
  const presentations = data.presentations;

  const deleteImagesInR2 = async (objectKeys: string[]) => {
    const result = await fetch("/api/image", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ objectKeys }),
    });
  };

  const deleteImages = async (editorOutput: JSONContent) => {
    const imagesToDelete: string[] = [];

    editorOutput.forEach((item: Item) => {
      if (item.type === "image") {
        const url = item.attrs.src;
        const path = url.split("/").pop() ?? "";

        imagesToDelete.push(path);
      }
    });

    await deleteImagesInR2(imagesToDelete);
  };

  const driverObj = driver({
    showProgress: true,
    showButtons: ["next", "previous"],
    steps: [
      {
        element: "#template-section",
        popover: {
          title: "Animated Tour Example",
          description:
            "Here is the code example showing animated tour. Let's walk you through it.",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#template-sections",
        popover: {
          title: "Import the Library",
          description:
            "It works the same in vanilla JavaScript as well as frameworks.",
          side: "bottom",
          align: "start",
        },
      },
	 
    ],
  });

  onMount(() => {
    driverObj.drive();
  });
</script>

<MetaTags title="Riju | Dashboard" description="Your presentations" />

<div class="w-full max-w-4xl mx-auto">
  <div id="template-section">
    <h4 class="font-semibold text-muted-foreground tracking-wide mb-4">
      Templates
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-4 grid-auto-flow gap-4 mb-12">
      {#each templates as { title, content }}
        <Button
          variant="outline"
          class="h-24"
          on:click={async () => {
            const theme = {
              backgroundCss:
                "background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);",
              transitionType: "zoom",
            };

            const presentationId = await createPresentation(
              title,
              content,
              theme
            );

            goto(`/dashboard/editor/${presentationId}`);
          }}
        >
          {title}
        </Button>
      {/each}
	   </div>
    </div>
    {#if presentations && presentations.length > 0}
      <h4 class="font-semibold text-muted-foreground tracking-wide mb-4">
        Your presentations
      </h4>
      <div class="max-w-4xl mx-auto">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.Head class="w-[100px]">#</Table.Head>
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
                <Table.Cell>{title}</Table.Cell>
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
                            window.open(`/dashboard/editor/${id}`, "_blank");
                          }}
                          ><ExternalLink class="h-4 w-4 mr-2" />Open in new tab</DropdownMenu.Item
                        >
                        <DropdownMenu.Separator />
                        <DropdownMenu.Item
                          class="text-destructive"
                          on:click={async () => {
                            let editorOutput = await getPresentationContent(id);
                            await deleteImages(editorOutput);

                            let result = await deletePresentation(id);
                            if (result) {
                              console.log("Successfully deleted presentation");
                              location.reload();
                            }
                          }}
                          ><Trash2
                            class="h-4 w-4 mr-2"
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
      </div>
    {:else}
      <p class="text-center">No presentations to show.</p>
    {/if}
</div>
