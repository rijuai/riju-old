export async function load({ params }) {
  try {
    const post = await import(`../../../routes/blog/${params.slug}.svx`);
    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    throw new Error(`Could not find blog post ${params.slug}`);
  }
} 