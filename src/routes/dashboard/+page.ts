import type { PageLoad } from "./$types";
import pb from "$lib/pocketbase";

export const load: PageLoad = async () => {
  const presentations = await pb.collection("presentations").getFullList({
    sort: "-updated",
    fields: "id,title",
  });

  return {
    presentations: presentations,
  };
};
