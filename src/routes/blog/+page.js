/** @type {import('./$types').PageLoad} */
export async function load() {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('./*.svx')).map(async ([path, resolver]) => {
      const post = /** @type {import('$lib/types').Post} */ (await resolver());
      const slug = path.slice(2, -4); // Remove './' and '.svx'
      return { slug, metadata: post.metadata };
    })
  );

  // Sort posts by date in descending order
  return {
    posts: posts.sort((a, b) => {
      return Date.parse(b.metadata.date) - Date.parse(a.metadata.date);
    })
  };
} 