import {
  BlockArray,
  BlockCurrency,
  BlockHTML,
  BlockImage,
  BlockText,
} from "./Blocks";

export default function useVisualizationAttr() {
  const isImage = (content) => {
    if (typeof content !== "string") return false;
    if (content.match(/\.(jpeg|jpg|gif|png)(\?.*)?$/) != null) return true;
    return content.match(/(data:image)/) != null;
  };

  const isArray = (content) => {
    return content instanceof Array;
  };

  const isHTML = (content) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1);
  };

  const getContentType = (content) => {
    if (isArray(content)) return "array";
    if (isHTML(content)) return "html";
    if (isImage(content)) return "image";
    return "text";
  };

  const getRenderBlock = (contentType) => {
    if (contentType === "image") return BlockImage;
    if (contentType === "currency") return BlockCurrency;
    if (contentType === "html") return BlockHTML;
    if (contentType === "array") return BlockArray;
    return BlockText;
  };

  return {
    isImage,
    getContentType,
    getRenderBlock,
  };
}
