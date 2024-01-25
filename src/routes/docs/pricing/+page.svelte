<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Check } from "lucide-svelte";

    let plans = [
        {
            name: "Basic",
            price: 0,
            features: ["2 Presentations", "Basic themes"],
            button_text: "Get started",
            button_href: "/signup",
        },
        {
            name: "Pro",

            price: 5,
            features: [
                "Unlimited presentations",
                "AI generated themes",
                "AI co-pilot for content generation",
                "Pexels image library",
                "No 'Made with Riju' branding",
                "Share publicly",
            ],
        },
    ];
</script>

<section class="py-14">
    <div class="mx-auto max-w-screen-xl px-4 text-gray-600 md:px-8">
        <div class="relative mx-auto max-w-xl sm:text-center">
            <h3 class="text-3xl font-semibold text-gray-800 sm:text-4xl">
                Pricing Plans
            </h3>
            <div class="mt-3 max-w-xl">
                <p>Get 2 months for free by subscribing yearly!</p>
            </div>
        </div>
        <div
            class="mx-auto mt-16 max-w-4xl justify-center gap-8 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-2"
        >
            {#each plans as { name, price, features }, index (name)}
                <Card.Root class={index == 1 ? "border-2 ring-sky-500" : "asd"}>
                    <Card.Header>
                        <Card.Title>{name}</Card.Title>
                        <h4>${price}</h4>
                        <Card.Description>Monthly per user</Card.Description>
                    </Card.Header>
                    <Card.Content>
                        <div class="flex flex-col justify-end">
                            <ul class="space-y-3">
                                {#each features as feature, fIndex}
                                    <li class="flex items-center gap-4">
                                        <Check class="size-4" />
                                        {feature}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    </Card.Content>
                    <Card.Footer>
                        <Button
                            class="w-full"
                            href={name === "Pro"
                                ? "/signin?utm_source=pricing&is_pro=true"
                                : "/signin?utm_source=pricing"}
                            >Get started</Button
                        >
                    </Card.Footer>
                </Card.Root>
            {/each}
        </div>
        <p class="text-muted-foreground mt-8 text-center">
            If you have feature requests, suggestions then email to
            namaste@riju.ai
        </p>
    </div>
</section>
