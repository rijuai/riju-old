import { supabase } from "$lib/config/supabase";
import type { PageLoad } from "./$types";

const getPresentationContent = async (presentationId: string) => {
  const { data } = await supabase
    .from("presentations")
    .select("content")
    .eq("id", presentationId);

  return data ? data[0] : null;
};

export const load = (async ({ params }) => {
  const presentationId = params.presentation_id;
  const { content } = await getPresentationContent(presentationId);

  return {
    content,
    presentationId,
  };
}) satisfies PageLoad;
