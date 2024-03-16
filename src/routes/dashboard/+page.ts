import type { PageLoad } from "./$types";
import pb from "$lib/pocketbase";

export const load: PageLoad = async () => {
  const presentations = await pb.collection("presentations").getFullList({
    fields: "id,title",
    sort: "-updated",
  });

  return {
    presentations: presentations,
  };
};
