import pb from "$lib/pocketbase";
import type { PageLoad } from "./$types";
import { convertEditorJsContentToHtml } from "./converter";

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	const presentationId = params.presentation_id;

	const { content, theme, is_public } = await pb
		.collection("presentations")
		.getOne(presentationId, {
			fields: "content,theme,is_public",
		});

	const htmlOutput = convertEditorJsContentToHtml(content);

	return {
		theme,
		isPublic: is_public,
		htmlOutput,
		presentationId: presentationId,
	};
};
