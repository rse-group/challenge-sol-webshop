export const checkIsImage = (content) => {
  if (!isNaN(parseInt(content))) return false;
  if (content?.match(/\.(jpeg|jpg|gif|png)*/) != null) {
    if (content.match(/\.(jpeg|jpg|gif|png)(\?.*)?$/) != null) return true;
  }
  return content?.match(/(data:image)/) != null;
};
