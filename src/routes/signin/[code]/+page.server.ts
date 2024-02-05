import appsumoCodes from "$lib/server/appsumo";
import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

export const load = (({ params }) => {
  const codes = appsumoCodes;
  const code = params.code;

  if (!codes.includes(code)) {
    redirect(302, "/404");
  }

  return { code: code };
}) satisfies PageLoad;
