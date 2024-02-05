<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { ChevronRight } from "lucide-svelte";
</script>

<section class="max-w-l mx-auto bg-slate-100 px-4 py-32 text-center">
    <div class="mx-auto max-w-2xl">
        <h2 class="mb-4">Presentations reimagined!</h2>
        <p class="text-muted-foreground mb-12 text-2xl">
            Building presentations with Riju is as simple as one-two-three.
        </p>
        <div class="mb-3 flex flex-col justify-center gap-4 md:flex-row">
            <Button size="lg" class="py-6 text-lg" href="/docs/contact"
                >Contact Us<ChevronRight class="ml-2" /></Button
            >
        </div>
        <p class="text-muted-foreground text-sm">No credit card required</p>
    </div>
</section>
