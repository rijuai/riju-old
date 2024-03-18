<script lang="ts">
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Input from "$lib/components/ui/input/input.svelte";
    import pb from "$lib/pocketbase";

    let email: string;
    let password: string;

    const signInUsingEmailAndPassword = async () => {
        const authData = await pb
            .collection("users")
            .authWithPassword(email, password);
    };
</script>

<MetaTags
    title="Riju | Sign in"
    description="Create a new account or Sign in if you are a existing user."
/>

<!-- Navbar -->
<nav
    class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 transform px-4 py-2"
>
    <div class="flex justify-between">
        <Button variant="link" class="text-xl" href="/">Riju</Button>
        <Button variant="link" href="/contact">Contact</Button>
    </div>
</nav>

<section
    class="mx-auto flex h-screen max-w-md items-center justify-center px-4"
>
    <div class="space-y-6">
        <h2>Login</h2>
        <Input type="email" placeholder="Email" bind:value={email} />
        <Input type="password" placeholder="Password" bind:value={password} />
        <Button
            class="w-full"
            on:click={async () => {
                await signInUsingEmailAndPassword();
            }}>Continue</Button
        >
        <!-- <p>OR</p>
        <Button variant="destructive" class="w-full">Google</Button> -->
        <p class="text-muted-foreground text-xs">
            By clicking, you agree to Riju <a
                class="underline"
                href="/docs/terms">Terms of Service</a
            >
            and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
        </p>
        <p class="text-center text-sm">
            Don't have an account <a class="underline" href="/signup"
                >Create an account</a
            >
        </p>
    </div>
</section>
