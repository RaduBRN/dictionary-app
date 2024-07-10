import { atom } from "recoil";

export const selectedFontAtom = atom({
  key: "selectedFont",
  default: {
    id: 0,
    text: "Sans Serif",
    value: "font-inter",
  },
});
