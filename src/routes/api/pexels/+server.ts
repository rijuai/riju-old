import { API_ALLOWED_ORIGIN } from "$env/static/private";
import { pexels } from "$lib/server/pexels";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request, url }) => {
  const origin = request.headers.get("host");
  if (!origin || origin !== API_ALLOWED_ORIGIN) {
    return new Response("Sorry, Forbidden", { status: 403 });
  }

  const query = url.searchParams.get("query") ?? "";
  const photos = await pexels.photos.search({ query, per_page: 5 });

  return json({
    photos: photos,
  });
};
