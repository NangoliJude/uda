export const H = "100vh";
export const W = "100vw";
export const Hm = "50vh";
export const Wm = "50vw";
export const Hq = "25vh";
export const Wq = "25vw";
export const white = "#fff";
export const black = "#111";
export const blue = "#08AEEA";
export const lightblue = "#64dafa";
export const mainGreen = "#2AF598";
export const mainColor = "#fafafa";
export const mainGradient = "linear-gradient(to right, #08AEEA, #2AF598)";

export const colors = {
  white,
  black,
  blue,
  lightblue,
  mainGreen,
  mainGradient,
  mainColor
};

export const space = [0, 8, 16, 32, 64];
export const spacing = { tight: 0.1, normal: "400", bold: "700" };
export const view = { H, W, Hm, Wm, Hq, Wq };
export const weight = { light: "200", normal: "400", bold: "700" };
export const lineHeight = { none: 1, tight: 1.25, normal: 1.5, large: 2 };
export const textSize = { sm: 14, base: 16, md: 18, lg: 20, xl: 32 };
const xD = {
  view,
  colors,
  space,
  spacing,
  weight,
  lineHeight,
  textSize
};

export default xD;
