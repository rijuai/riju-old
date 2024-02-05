<script lang="ts">
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { Button } from "$lib/components/ui/button";
    import { supabase } from "$lib/config/supabase";
    import { ThemeSupa } from "@supabase/auth-ui-shared";
    import { Auth } from "@supabase/auth-ui-svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
    const { code } = data;
</script>

<MetaTags
    title="Riju | Create account or Sign in"
    description="Create a new account or Sign in if you are a existing user."
/>

<!-- Navbar -->
<nav
    class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2 transform px-2 py-3"
>
    <div class="mx-auto flex max-w-7xl justify-between">
        <Button variant="link" class="text-2xl font-semibold" href="/"
            >Riju</Button
        >
        <Button
            variant="link"
            class="text-muted-foreground text-base font-semibold"
            href="/docs/contact">Contact</Button
        >
    </div>
</nav>

<section
    class="mx-auto flex h-screen max-w-md items-center justify-center px-4"
>
    <div class="w-full">
        <h1 class="text-xl font-semibold">Create account / Sign in</h1>
        <p class="text-muted-foreground mb-8">
            Tip: You can also sign in from this same page.
        </p>
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            providers={["google"]}
            redirectTo="https://riju.ai/dashboard"
            showLinks={false}
            additionalData={{
                from: "homepage",
                appsumoCode: { data },
            }}
            appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand: "hsl(222.2 47.4% 11.2%)",
                            brandAccent: "hsl(222.2 84% 4.9%)",
                        },
                    },
                },
            }}
        />
        <p class="text-muted-foreground text-xs">
            By clicking, you agree to the Riju <a
                class="underline"
                href="/docs/terms">Terms of Service</a
            >
            and <a class="underline" href="/docs/privacy">Privacy Policy</a>.
        </p>
    </div>
</section>
