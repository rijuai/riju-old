<script lang="ts">
    import Badge from "$lib/components/ui/badge/badge.svelte";
    import * as Card from "$lib/components/ui/card";

    enum FeatureStatus {
        "planned",
        "in-progress",
        "completed",
    }

    const features = [
        {
            title: "Add table block",
            description:
                "Add a table block to your page to display data in a structured way.",
            status: FeatureStatus["in-progress"],
        },
        {
            title: "Add chart block",
            description:
                "Add a chart block to your page to display data in a visual way.",
            status: FeatureStatus["planned"],
        },
        {
            title: "Custom logo watermark",
            description: "Add a custom logo watermark to your presentations.",
            status: FeatureStatus["planned"],
        },
        {
            title: "Make Split Slide block more simple and intuitive",
            description: "Make the split block appear beside the other block.",
            status: FeatureStatus["planned"],
        },
    ];
</script>

<main class="mx-auto max-w-xl">
    <div class="mb-8">
        <h1 class="mb-4">Roadmap</h1>
        <p class="text-muted-foreground">
            We are constantly working on new features and improvements. If you
            have any feature requests just email us at just email us at
            namaste@riju.ai
        </p>
    </div>
    <div class="flex flex-col gap-4">
        {#each features as { title, description, status }}
            <Card.Root>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                    <Card.Description>{description}</Card.Description>
                </Card.Header>
                <Card.Content>
                    <Badge>{FeatureStatus[status]}</Badge>
                </Card.Content>
            </Card.Root>
        {/each}
    </div>
</main>
