<script>
import { page } from '$app/stores'
export let title = ''
export let description = ''
export let date = ''
export let author = ''
export let image = ''
</script>

<svelte:head>
  <title>{title || 'Blog'}</title>
  <meta name="description" content={description} />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  {#if image}
    <meta property="og:image" content={image} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={$page.url.href} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  {#if image}
    <meta property="twitter:image" content={image} />
  {/if}
</svelte:head>

<article class="prose prose-lg mx-auto px-4 py-8">
  <header class="mb-8">
    {#if title}
      <h1 class="text-4xl font-bold">{title}</h1>
    {/if}
    {#if date || author}
      <div class="text-gray-600 mt-2">
        {#if date}
          <time datetime={date}>{new Date(date).toLocaleDateString()}</time>
        {/if}
        {#if author}
          {#if date} · {/if}
          <span>{author}</span>
        {/if}
      </div>
    {/if}
  </header>

  <slot />
</article> 