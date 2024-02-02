import type { OutputData } from "@editorjs/editorjs";

export const convertEditorJsContentToHtml = (content: OutputData): string => {
  let outputHtml = "";
  let count = 0;
  let tempHtml = "";
  let blocks: string[] = [];
  let addSubSection = false;
  let images = [];

  for (const block of content.blocks) {
    console.log(block);
    const blockType = block.type;
    count++;

    if (blockType === "heading") {
      tempHtml += getHeading(block);
    } else if (blockType === "paragraph") {
      tempHtml += getParagraph(block);
    } else if (blockType === "nestedList") {
      tempHtml += getList(block);
    } else if (blockType === "image") {
      tempHtml += getImage(block);
      images.push(getImage(block));
    }

    if (blockType === "newSlide" || count === content.blocks.length) {
      if (addSubSection) {
        let blocksHtml = "";
        blocks.push(tempHtml);

        for (const blockHtml of blocks) {
          blocksHtml += `<div>${blockHtml}</div>`;
        }

        outputHtml += `<section><div class="grid grid-cols-2 gap-16">${blocksHtml}</div></section>`;

        addSubSection = false;
        blocks.length = 0;
      } else {
        outputHtml += `<section>${tempHtml}</section>`;
      }

      tempHtml = "";
    }
  }

  return outputHtml;
};

const getHeading = (block: any): string => {
  if (!block.data || !block.data.text) return "";

  const level = block.data.level;
  let text = block.data.text;

  return `<h${level}>${text}</h${level}>`;
};

const getParagraph = (block: any): string => {
  if (!block.data || !block.data.text) return "";

  let text = block.data.text;

  return `<p>${text}</p>`;
};

const getList = (block: any): string => {
  if (!block.data || !block.data.items) return "";

  let listItems = (items: any[]): string => {
    return items
      .map((item) => {
        if (typeof item === "object" && item.content) {
          let nestedListHtml =
            item.items && item.items.length > 0
              ? `<ul>${listItems(item.items)}</ul>`
              : "";
          return `<li>${item.content}${nestedListHtml}</li>`;
        }
        return "";
      })
      .join("");
  };

  const style = block.data.style === "ordered" ? "ol" : "ul";
  let list = `<${style}>${listItems(block.data.items)}</${style}>`;

  return list;
};

const getImage = (block: any): string => {
  if (!block.data || !block.data.file) return "";

  const src = block.data.file.url;
  const alt = block.data.caption ?? "image";
  return `<img class="object-cover" src="${src}" alt="${alt}" />`;
};
