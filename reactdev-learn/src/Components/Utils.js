export function GetImageUrl({ person, size = `s` }) {
  return `https://i.imgur.com/` + person.imageId + size + `.jpg`;
}

export function GetImageUrlByImageId(imageId) {
  return `https://i.imgur.com/` + imageId + `.jpg`;
}
