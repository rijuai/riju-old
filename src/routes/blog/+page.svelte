<script>
/** @type {import('./$types').PageData} */
export let data
</script>

<svelte:head>
  <title>Blog</title>
  <meta name="description" content="Read our latest blog posts" />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
  
  <div class="space-y-8">
    {#each data.posts as post}
      <article class="border-b pb-8">
        <h2 class="text-2xl font-semibold mb-2">
          <a href="/blog/{post.slug}" class="hover:text-blue-600">{post.metadata.title}</a>
        </h2>
        {#if post.metadata.description}
          <p class="text-gray-600 mb-4">{post.metadata.description}</p>
        {/if}
        <div class="text-sm text-gray-500">
          {#if post.metadata.date}
            <time datetime={post.metadata.date}>
              {new Date(post.metadata.date).toLocaleDateString()}
            </time>
          {/if}
          {#if post.metadata.author}
            {#if post.metadata.date} · {/if}
            <span>{post.metadata.author}</span>
          {/if}
        </div>
      </article>
    {/each}
  </div>
</div> 