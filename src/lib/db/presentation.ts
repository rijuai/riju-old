import { supabase } from "$lib/config/supabase";
import type { Json } from "../../schema";

export const createPresentation = async (
  title: string,
  content: Json = [],
  theme: Json = {},
) => {
  const { data } = await supabase
    .from("presentations")
    .insert({
      title: title,
      content: content,
      theme: theme,
    })
    .select("id");

  return data ? data[0].id : null;
};

export const getPresentationContent = async (presentationId: string) => {
  const { data } = await supabase
    .from("presentations")
    .select("content")
    .eq("id", presentationId);

  return data ? data[0] : null;
};

export const savePresentationTheme = async (
  presentationId: string,
  theme: {
    backgroundCss: string;
    transitionType: string;
  },
) => {
  const { error } = await supabase
    .from("presentations")
    .update({ theme: theme })
    .eq("id", presentationId);

  return error ? false : true;
};
