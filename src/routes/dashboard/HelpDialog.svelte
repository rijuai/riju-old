<script lang="ts">
    import HelpCircle from "lucide-svelte/icons/help-circle";
    import { supabase } from "$lib/config/supabase";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { goto } from "$app/navigation";

    const signOut = async () => {
        await supabase.auth.signOut();
        goto("/");
    };
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger class="fixed bottom-6 left-6"
        ><HelpCircle /></DropdownMenu.Trigger
    >
    <DropdownMenu.Content>
        <DropdownMenu.Group>
            <DropdownMenu.Item href="/dashboard/settings"
                >Account</DropdownMenu.Item
            >
            <DropdownMenu.Item
                data-tally-open="wAvyoN"
                data-tally-layout="modal"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave">Feedback</DropdownMenu.Item
            >
            <DropdownMenu.Item href="/contact">Contact Us</DropdownMenu.Item>
            <DropdownMenu.Item
                on:click={() => {
                    signOut();
                }}>Sign Out</DropdownMenu.Item
            >
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>
