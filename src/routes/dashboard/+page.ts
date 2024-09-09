import pb from "$lib/pocketbase"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
	const presentations = await pb.collection("presentations").getFullList({
		fields: "id,title",
		sort: "-updated",
	})

	return {
		presentations: presentations,
	}
}
