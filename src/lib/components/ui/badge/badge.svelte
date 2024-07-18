<script lang="ts">
import { cn } from "$lib/utils";
import { type Variant, badgeVariants } from ".";

const className: string | undefined | null = undefined;
export const href: string | undefined = undefined;
export const variant: Variant = "default";
export { className as class };
</script>

<svelte:element
    this={href ? "a" : "span"}
    {href}
    class={cn(badgeVariants({ variant, className }))}
    {...$$restProps}
>
    <slot />
</svelte:element>
