import { supabase } from "$lib/config/supabase";
import { convertContentToHtml } from "./convertContentToHtml";
import type { JSONContent } from "@tiptap/core";
import type { PageLoad } from "./$types";

export const ssr = false;

const getFullPresentation = async (presentationId: string) => {
  const { data } = await supabase
    .from("presentations")
    .select("content, theme, is_public")
    .eq("id", presentationId);

  return data ? data[0] : null;
};

export const load = (async ({ params }) => {
  const presentationId = params.presentation_id;
  const { content, theme, is_public } = (await getFullPresentation(
    presentationId,
  )) ?? {
    content: [],
    theme: null,
    is_public: false,
  };

  const htmlOutput = convertContentToHtml(content as JSONContent[]);

  return {
    theme: theme,
    isPublic: is_public,
    htmlOutput: htmlOutput,
    presentationId: presentationId,
  };
}) satisfies PageLoad;
