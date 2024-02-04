import appsumoCodes from "$lib/server/appsumo";
import { redirect, fail } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

export const load = (({ params }) => {
  const codes = appsumoCodes;
  const code = params.code;
  console.log(code);
  let c = codes.includes(code);
  console.log(c);

  if (!codes.includes(code)) {
    redirect(302, "/404");
  }

  return { a: "as" };
}) satisfies PageLoad;
