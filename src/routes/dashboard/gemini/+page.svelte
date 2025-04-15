<script lang="ts">
import { enhance } from '$app/forms'
import Button from '$lib/components/ui/button/button.svelte'
import Textarea from '$lib/components/ui/textarea/textarea.svelte'
import type { PageData } from './$types'

export let data: PageData
</script>

<form method="POST" action="/dashboard?/generateSummary" use:enhance>
  <Textarea type="text" name="text" />
  <Button type="submit">Generate Summary</Button>
</form>

{#if data.text}
  <div class="summary-box">
    <h3>Summary</h3>
    <p>{data.text}</p>
  </div>
{/if}