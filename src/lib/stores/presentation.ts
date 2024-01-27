import type { JSONContent } from "@tiptap/core";
import { readable, writable, type Writable } from "svelte/store";

export const editorOutput = writable({} as JSONContent);
export const isPresentationPublic = writable(false);

// biome-ignore lint/style/useConst: <explanation>
export let transitionType: Writable<TransitionType> = writable(
  TransitionType.Zoom,
);

export const currentTheme = writable("background-color: #FFF6E0;");

export const themes = readable([
  "background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
  "background: linear-gradient(90deg, rgba(135,206,235,1) 0%, rgba(240,248,255,1) 100%);",
  "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
  "background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);",
  "background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);",
  "background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);",
  "background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);",
  "background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);",
  "background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);",
  "background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);",
  "background-image: repeating-linear-gradient(45deg, rgb(249, 249, 249) 0px, rgb(249, 249, 249) 109px,rgb(234, 234, 234) 109px, rgb(234, 234, 234) 218px,rgb(242, 242, 242) 218px, rgb(242, 242, 242) 327px);",
  "background-image: repeating-linear-gradient(90deg, rgb(224, 224, 224) 0px, rgb(224, 224, 224) 75px,rgb(237, 237, 237) 75px, rgb(237, 237, 237) 150px,rgb(249, 249, 249) 150px, rgb(249, 249, 249) 225px,rgb(232, 232, 232) 225px, rgb(232, 232, 232) 300px,rgb(228, 228, 228) 300px, rgb(228, 228, 228) 375px,rgb(245, 245, 245) 375px, rgb(245, 245, 245) 450px,rgb(220, 220, 220) 450px, rgb(220, 220, 220) 525px,rgb(241, 241, 241) 525px, rgb(241, 241, 241) 600px);",
  "background-image: linear-gradient(135deg, transparent 0%, transparent 2%,rgba(153, 243, 62,0.6) 2%, rgba(153, 243, 62,0.6) 21%,transparent 21%, transparent 85%,rgba(213, 250, 34,0.6) 85%, rgba(213, 250, 34,0.6) 100%),linear-gradient(45deg, transparent 0%, transparent 18%,rgba(153,243,62, 0.44) 18%, rgba(153,243,62, 0.44) 31%,rgb(255,255,255) 31%, rgb(255,255,255) 44%,transparent 44%, transparent 93%,rgb(173, 246, 53) 93%, rgb(173, 246, 53) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));",
]);

export const getRandomNumber = (length: number): number => {
  const previousNumbers = new Set<number>();
  const maxNumber = length;

  let randomNumber: number;
  do {
    randomNumber = Math.floor(Math.random() * maxNumber);
  } while (previousNumbers.has(randomNumber));
  previousNumbers.add(randomNumber);
  if (previousNumbers.size > 3) {
    previousNumbers.delete(Array.from(previousNumbers)[1]);
  }
  return randomNumber;
};

export const changeTheme = () => {
  themes.subscribe((value) => {
    currentTheme.set(value[getRandomNumber(value.length)]);
  });
};
