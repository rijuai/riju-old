<script lang="ts">
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { Button } from "$lib/components/ui/button";
    import pb from "$lib/pocketbase";

    const signIn = async () => {
        let w = window.open();

        const authData = await pb.collection("users").authWithOAuth2({
            provider: "google",
            redirectUrl: "https://riju.ai/dashboard",
            urlCallback: (url) => {
                w.location.href = url;
            },
        });
    };
</script>

<MetaTags
    title="Riju | Sign in"
    description="Create a new account or Sign in if you are a existing user."
/>

<!-- Navbar -->
<nav
    class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 transform px-2 py-3"
>
    <div class="flex justify-between">
        <Button variant="link" class="text-2xl font-semibold" href="/"
            >Riju</Button
        >
        <Button variant="link" href="/contact">Contact</Button>
    </div>
</nav>

<section
    class="mx-auto flex h-screen max-w-md items-center justify-center px-4"
>
    <div class="w-full">
        <h3>Create account / Sign in</h3>
        <p class="text-muted-foreground mb-8">
            Tip: You can also sign in from this same page.
        </p>

        <Button variant="destructive" class="w-full" on:click={signIn}
            >Google</Button
        >
        <p class="text-muted-foreground text-xs">
            By clicking, you agree to Riju <a
                class="underline"
                href="/docs/terms">Terms of Service</a
            >
            and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
        </p>
    </div>
</section>
