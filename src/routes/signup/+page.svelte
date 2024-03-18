<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { Button } from "$lib/components/ui/button";
    import Input from "$lib/components/ui/input/input.svelte";
    import pb from "$lib/pocketbase";
    import { onMount } from "svelte";

    let fullName: string;
    let email: string;
    let password: string;
    let referralCode: string;

    onMount(() => {
        referralCode = String($page.url.searchParams.get("referralCode"));
        console.log(referralCode);
    });

    const signUpUsingEmailAndPassword = async () => {
        const data = {
            name: fullName,
            email: email,
            password: password,
            passwordConfirm: password,
            referralCode: referralCode,
        };

        const authData = await pb.collection("users").create(data);

        /** Send verification email */
        await pb.collection("users").requestVerification(email);

        goto("/dashboard");
    };
</script>

<MetaTags title="Riju | Sign up" description="Create a new account." />

<!-- Navbar -->
<nav
    class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 transform px-3 py-2"
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
        <h2 class="mb-4">Create an account</h2>
        <Input type="text" placeholder="Full name" bind:value={fullName} />
        <Input type="email" placeholder="Email" bind:value={email} />
        <Input type="password" placeholder="Password" bind:value={password} />
        <Button
            class="w-full"
            on:click={async () => {
                await signUpUsingEmailAndPassword();
            }}>Continue</Button
        >
        <!-- <div
            class="text-muted-foreground flex w-full items-center justify-center gap-2 py-2 before:flex-1 before:border after:flex-1 after:border"
        >
            <p>OR</p>
        </div>
        <Button variant="destructive" class="w-full">Google</Button> -->
        <p class="text-muted-foreground mb-12 text-xs">
            By clicking, you agree to Riju <a
                class="underline"
                href="/docs/terms">Terms of Service</a
            >
            and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
        </p>
        <p class="text-center text-sm">
            Already have an account <a class="underline" href="/login">Login</a>
        </p>
    </div>
</section>
