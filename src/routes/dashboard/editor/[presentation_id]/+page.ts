import pb from "$lib/pocketbase";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
	const { presentation_id } = params;
	const { content } = await pb
		.collection("presentations")
		.getOne(presentation_id, {
			fields: "content",
		});

	return {
		content,
		presentationId: presentation_id,
	};
};
