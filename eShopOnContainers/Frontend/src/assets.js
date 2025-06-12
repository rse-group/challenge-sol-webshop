const assets = import.meta.glob(["@/assets/*.png", "@/assets/*.webp"], {
  import: "default",
  eager: true,
});

function removeFileExtension(filename) {
  var lastDotPosition = filename.lastIndexOf(".");
  if (lastDotPosition === -1) return filename;
  else return filename.substr(0, lastDotPosition);
}

function getFileFromPath(path) {
  return path.split(/(\\|\/)/g).pop();
}

export function getAsset(fileName) {
  const key = Object.keys(assets).find((key) => {
    const file = removeFileExtension(getFileFromPath(key));
    return fileName === file;
  });
  return assets[key];
}
