import { supabase } from "$lib/config/supabase";
import type { PageLoad } from "./$types";
import { convertEditorJsContentToHtml } from "./converter";

export const ssr = false;

const getPresentationData = async (presentationId: string) => {
  const { data } = await supabase
    .from("presentations")
    .select("content, theme, is_public")
    .eq("id", presentationId);

  return data ? data[0] : null;
};

export const load = (async ({ params }) => {
  const presentationId = params.presentation_id;
  const { content, theme, is_public } = (await getPresentationData(
    presentationId,
  )) ?? {
    content: [],
    theme: null,
    is_public: false,
  };

  const htmlOutput = convertEditorJsContentToHtml(content);

  return {
    theme: theme,
    isPublic: is_public,
    htmlOutput: htmlOutput,
    presentationId: presentationId,
  };
}) satisfies PageLoad;
