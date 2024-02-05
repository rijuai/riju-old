<script lang="ts">
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
    </Card.Content>
</Card.Root>
