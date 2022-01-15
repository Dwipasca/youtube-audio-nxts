// input : https://www.youtube.com/watch?v=kgx4WGK0oNU
// output : kgx4WGK0oNU
export const youtubeGetId = (url: string) => {
  let ID = "";
  let urls = url
    .replace(/(>|<)/gi, "")
    .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (urls[2] !== undefined) {
    ID = urls[2].split(/[^0-9a-z_\-]/i)[0];
  } else {
    ID = url;
  }
  return ID;
};
