import { supabase } from "$lib/config/supabase";
import type { Json } from "../../../../schema";
import type { PageLoad } from "./$types";

const getPresentationContent = async (
  presentationId: string,
): Promise<{ content: Json } | null> => {
  const { data } = await supabase
    .from("presentations")
    .select("content")
    .eq("id", presentationId);

  return data ? data[0] : null;
};

export const load = (async ({ params }) => {
  const presentationId = params.presentation_id;
  const { content } = (await getPresentationContent(presentationId)) ?? {
    content: null,
  };

  return {
    content: content,
    presentationId: presentationId,
  };
}) satisfies PageLoad;
