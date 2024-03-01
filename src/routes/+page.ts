// import { isUserAuthenticated } from "$lib/db/auth";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import pb from "$lib/pocketbase";

export const ssr = false;
export const prerender = true;

export const load: PageLoad = async () => {
  let isUserAuthenticated = pb.authStore.isValid;
  if (isUserAuthenticated) redirect(302, "/dashboard");
};
