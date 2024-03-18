<script lang="ts">
    import CTA from "$lib/components/CTA.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import HomePageNavbar from "$lib/components/HomePageNavbar.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { Button } from "$lib/components/ui/button";
    import DemoVideo from "$lib/assets/videos/riju-demo.mp4";
    import * as Card from "$lib/components/ui/card";
    import Layout from "lucide-svelte/icons/layout-grid";
    import ArrowRight from "lucide-svelte/icons/arrow-right";
    import DailyCompanyNewsLogo from "$lib/assets/images/featured/dailycompanynews-logo.png";
    import OpenFutureLogo from "$lib/assets/images/featured/openfuture-logo.png";
    import SubscribedFyiLogo from "$lib/assets/images/featured/subscribedfyi-inverted-logo.png";
    import SuperbCrewLogo from "$lib/assets/images/featured/superbcrew-logo.png";
    import ProductHunterLogo from "$lib/assets/images/featured/product-hunt-logo.png";
    import Sparkles from "lucide-svelte/icons/sparkles";
    import Text from "lucide-svelte/icons/text";
    import { IndianRupee } from "lucide-svelte";

    const featuredCompaniesLogo = [
        ProductHunterLogo,
        OpenFutureLogo,
        DailyCompanyNewsLogo,
        SubscribedFyiLogo,
        SuperbCrewLogo,
    ];
</script>

<MetaTags
    title="Riju | Presentation Builder"
    description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<HomePageNavbar />

<main class="mx-auto max-w-5xl px-4">
    <!-- Hero -->
    <div class="pt-16 text-center">
        <h1 class="mb-6">Presentations without <u>Headache</u></h1>
        <p class="text-muted-foreground mx-auto mb-16 max-w-2xl text-xl">
            Say goodbye to boring presentations. Meet Riju — the free, intuitive
            presentation builder you’ve been looking for.
        </p>
        <div class="mb-20 space-y-2">
            <Button size="lg" class="font-semibold" href="/signup"
                >Get Started<ArrowRight class="ml-2 size-5" /></Button
            >
            <p class="text-muted-foreground text-sm">
                No credit card required. Fully free.
            </p>
        </div>

        <!-- Demo Video -->
        <video
            class="mx-auto rounded-lg border shadow-xl"
            src={DemoVideo}
            muted
            loop
            autoplay
        />
    </div>

    <!-- Featured -->
    <section>
        <h4 class="mb-12 text-center">Featured on major websites</h4>
        <div
            class="flex flex-col items-center justify-center gap-12 lg:flex-row"
        >
            {#each featuredCompaniesLogo as logos}
                <img class="h-12 w-auto" src={logos} alt="Featured companies" />
            {/each}
        </div>
    </section>

    <!-- Cards -->
    <section>
        <h2 class="mb-12">Simple but powerful</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card.Root>
                <Card.Header>
                    <Text class="mb-2" />
                    <Card.Title tag="h4">Just start typing...</Card.Title>
                </Card.Header>
                <Card.Content>
                    Riju is a new type of online presentation maker that works
                    like a text document. Just start typing on the page and
                    insert blocks as needed.
                </Card.Content>
            </Card.Root>
            <Card.Root>
                <Card.Header>
                    <Sparkles class="mb-2" />
                    <Card.Title tag="h4"
                        >Effortless theme customization</Card.Title
                    >
                </Card.Header>
                <Card.Content>
                    <p>
                        With Riju, you can switch themes with a single click,
                        ensuring that your presentation aligns perfectly with
                        your message and audience.
                    </p>
                </Card.Content>
            </Card.Root>
            <Card.Root>
                <Card.Header>
                    <Layout class="mb-2" />
                    <Card.Title tag="h4">Super simple UI</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>
                        Our intuitive interface ensures that anyone, regardless
                        of their technical skills, can create captivating
                        presentations effortlessly.
                    </p>
                </Card.Content>
            </Card.Root>
            <Card.Root>
                <Card.Header>
                    <IndianRupee class="mb-2" />
                    <Card.Title tag="h4">Fully free</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>
                        Riju is completely free to use. You can create unlimited
                        presentations without any restrictions.
                    </p>
                </Card.Content>
            </Card.Root>
        </div>
    </section>

    <section></section>

    <CTA />
    <Footer />
</main>

<style lang="postcss">
    section {
        @apply my-16 px-4 lg:my-44 lg:px-8;
    }
</style>
