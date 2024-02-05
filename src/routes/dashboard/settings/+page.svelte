<script lang="ts">
    import { goto } from "$app/navigation";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { supabase } from "$lib/config/supabase";
    import { onMount } from "svelte";

    let email: string;

    const getUserEmail = async () => {
        const { data } = await supabase.auth.getSession();
        const userEmail = data.session?.user.email;

        return userEmail ? userEmail : null;
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();

        return error ? false : true;
    };

    onMount(async () => {
        email = (await getUserEmail()) ?? "";
    });
</script>

<MetaTags title="Riju | Settings" description="Settings" />

<Card.Root class="mx-auto max-w-lg">
    <Card.Header>
        <Card.Title>Settings</Card.Title>
    </Card.Header>
    <Card.Content class="space-y-8">
        <div>
            <Label class="mb-2 block">Email</Label>
            <Input type="email" disabled bind:value={email} />
            <p class="text-muted-foreground mt-1 text-sm">
                To change email address <a
                    class="underline"
                    href="/docs/contact">contact us</a
                >.
            </p>
        </div>
        <div class="flex text-sm">
            Do you want to sign out? Then <a
                class="ml-1 text-blue-500 underline"
                href="/"
                on:click={async () => {
                    await signOut();
                    goto("/");
                }}>click here</a
            >.
        </div>
    </Card.Content>
</Card.Root>
