<script lang="ts">
    import ArrowRight from "$lib/assets/icons/arrow-right.svelte";
    import DailyCompanyNewsLogo from "$lib/assets/images/featured/dailycompanynews-logo.png";
    import OpenFutureLogo from "$lib/assets/images/featured/openfuture-logo.png";
    import SubscribedFyiLogo from "$lib/assets/images/featured/subscribedfyi-inverted-logo.png";
    import SuperbCrewLogo from "$lib/assets/images/featured/superbcrew-logo.png";
    import DemoVideo from "$lib/assets/videos/riju-demo-muted.mp4";
    import CTA from "$lib/components/CTA.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import HomePageNavbar from "$lib/components/HomePageNavbar.svelte";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Layout, Pointer, Rocket } from "lucide-svelte";

    const featuredCompaniesImages = [
        OpenFutureLogo,
        DailyCompanyNewsLogo,
        SubscribedFyiLogo,
        SuperbCrewLogo,
    ];
</script>

<MetaTags
    title="Super fast and easy-to-use alternative to Microsoft PowerPoint"
    description="Create presentations in seconds. Riju turns your words into stunning presentations. Our smart tech blends beauty and impact, perfect for impressing clients or inspiring students."
/>

<main class="mx-auto max-w-7xl">
    <HomePageNavbar />
    <!-- ** Hero ** -->
    <section class="mx-auto max-w-4xl text-center">
        <h1 class="mb-6 text-black">Pitch without headache</h1>
        <p
            class="text-muted-foreground mx-auto mb-12 max-w-2xl text-2xl font-normal leading-normal"
        >
            Say goodbye to boring presentations. Meet Riju — the free, intuitive
            presentation builder you’ve been looking for.
        </p>
        <div class="mb-2.5 flex flex-col justify-center gap-4 md:flex-row">
            <Button size="lg" class="py-6 text-lg" href="/signin"
                >Get Started<ArrowRight /></Button
            >
        </div>
        <p class="text-muted-foreground text-sm">No credit card required</p>
    </section>

    <!-- ** Demo Video ** -->
    <section class="mx-auto max-w-5xl">
        <video
            class="rounded-lg shadow-xl"
            src={DemoVideo}
            muted
            loop
            autoplay
        />
    </section>

    <!-- ** Cards ** -->
    <section class="mx-auto max-w-6xl">
        <h2 class="mb-12">
            Focus on the content, <br /> not on the formatting
        </h2>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card.Root>
                <Card.Header>
                    <Rocket class="mb-2 size-8" />
                    <Card.Title>Rapid presentation creation</Card.Title>
                </Card.Header>
                <Card.Content>
                    Simply write your content, and Riju will automatically
                    convert it into a well-structured and visually appealing
                    presentation.
                </Card.Content>
            </Card.Root>
            <Card.Root>
                <Card.Header>
                    <Pointer class="mb-2 size-8" />
                    <Card.Title>Effortless theme customization</Card.Title>
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
                    <Layout class="mb-2 size-8" />
                    <Card.Title>User-friendly interface</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>
                        Our intuitive interface ensures that anyone, regardless
                        of their technical skills, can create captivating
                        presentations effortlessly.
                    </p>
                </Card.Content>
            </Card.Root>
        </div>
    </section>

    <!-- ** How it works ** -->
    <!-- <section>
		<h2 class="text-center">How It Works?</h2>
		<p class="text-center text-muted-foreground max-w-lg mx-auto mb-8">
			Creating presentations in Riju is as easy as 1-2-3.
		</p>
		<div class="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-lg mx-auto">
			{#each steps as { title, description }}
				<Card.Root>
					<Card.Header>
						<Card.Title class="text-xl tracking-tight">{title}</Card.Title>
						<Card.Description class="text-base">{description}</Card.Description>
					</Card.Header>
				</Card.Root>
			{/each}
		</div>
	</section> -->

    <!-- ** Featured -->
    <section class="max-w mx-auto">
        <h2 class="mb-16 text-center">Featured On</h2>
        <div class="grid- grid items-center justify-center gap-12">
            {#each featuredCompaniesImages as image}
                <img
                    class="h-16 w-auto opacity-75 grayscale"
                    src={image}
                    alt=""
                />
            {/each}
        </div>
    </section>

    <CTA />
    <Footer />
</main>

<style lang="postcss">
    section {
        @apply my-16 px-4 lg:my-44;
    }
</style>
