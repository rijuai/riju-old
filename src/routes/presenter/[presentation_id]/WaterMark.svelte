<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";

    export let text: string;
</script>

<Badge class="fixed bottom-4 right-4 z-50 px-3 py-1 text-base">{text}</Badge>
