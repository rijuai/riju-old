import { supabase } from "$lib/config/supabase";
import type { PageLoad } from "./$types";

const getPresentations = async () => {
  const { data } = await supabase
    .from("presentations")
    .select("id, title")
    .order("updated_at", { ascending: false });

  return data ? data : null;
};

export const load = (async () => {
  const presentations = await getPresentations();

  return { presentations };
}) satisfies PageLoad;
