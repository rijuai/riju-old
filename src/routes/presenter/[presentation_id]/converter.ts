import type { OutputData } from "@editorjs/editorjs";

export const convertEditorJsContentToHtml = (content: OutputData) => {
  let outputHtml = "";
  let count = 0;
  let tempHtml = "";
  let blocks: string[] = [];
  let addSubSection = false;

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
      tempHtml = `<div>${tempHtml}</div><div>${getImage(block)}</div>`;
    } else if (blockType === "splitSlide") {
      addSubSection = true;
      blocks.push(tempHtml);
      tempHtml = "";
    }

    if (blockType === "newSlide" || count === content.blocks.length) {
      if (addSubSection) {
        let blocksHtml = "";
        blocks.push(tempHtml);

        for (const blockHtml of blocks) {
          blocksHtml += `<div>${blockHtml}</div>`;
        }

        outputHtml += `<section><div class="grid grid-cols-2 gap-12">${blocksHtml}</div></section>`;

        addSubSection = false;
        blocks.length = 0;
      } else {
        outputHtml += `<section class="">${tempHtml}</section>`;
      }

      tempHtml = "";
    }
  }

  return outputHtml;
};

const getHeading = (block: any) => {
  if (!block.data || !block.data.text) return "";

  const level = block.data.level;
  let text = block.data.text;

  return `<h${level}>${text}</h${level}>`;
};

const getParagraph = (block: any) => {
  if (!block.data || !block.data.text) return "";

  let text = block.data.text;

  return `<p>${text}</p>`;
};

const getList = (block: any) => {
  if (!block.data || !block.data.items) return "";

  let listItems = (items: any[]): string => {
    let itemsHtml = "";
    for (const item of items) {
      if (typeof item === "object" && item.content) {
        let nestedListHtml =
          item.items && item.items.length > 0
            ? `<ul>${listItems(item.items)}</ul>`
            : "";
        itemsHtml += `<li>${item.content}${nestedListHtml}</li>`;
      }
    }
    return itemsHtml;
  };

  const style = block.data.style === "ordered" ? "ol" : "ul";
  let list = `<${style}>${listItems(block.data.items)}</${style}>`;

  return list;
};

const getImage = (block: any) => {
  if (!block.data || !block.data.file) return "";

  const src = block.data.file.url;
  const alt = block.data.caption ?? "image";
  return `<img class="" src="${src}" alt="${alt}" />`;
};
