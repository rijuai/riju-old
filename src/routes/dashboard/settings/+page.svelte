<script lang="ts">
import MetaTags from '$lib/components/MetaTags.svelte'
import * as Card from '$lib/components/ui/card'
import { Input } from '$lib/components/ui/input'
import { Label } from '$lib/components/ui/label'
import supabase from '$lib/supabase'
import { onMount } from 'svelte'

let email: string = $state('')

const getUserEmail = async () => {
	const {
		data: { user }
	} = await supabase.auth.getUser()

	return user?.email ?? ''
}

onMount(async () => {
	email = await getUserEmail()
})
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
                To change email address <a class="underline" href="/contact"
                    >contact us</a
                >.
            </p>
        </div>
    </Card.Content>
</Card.Root>
