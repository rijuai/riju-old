import { pexels } from "$lib/server/pexels";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const query = url.searchParams.get("query") ?? "";

  const photos = await pexels.photos.search({ query, per_page: 5 });

  return json(
    {
      photos: photos,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "https://riju.ai",
      },
    },
  );
};
