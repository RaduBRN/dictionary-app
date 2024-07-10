import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedFontAtom } from "../../atoms/selectedFont";
import { useDetectClickOutside } from "react-detect-click-outside";
import icon from "../../assets/icons/fontSelect.png";

const menu = [
  {
    text: "Sans Serif",
    value: "font-inter",
  },
  {
    text: "Serif",
    value: "font-lora",
  },
  {
    text: "Mono",
    value: "font-inconsolata",
  },
];

function FontSelector() {
  const [showFontSelector, setShowFontSelector] = useState(false);
  const [selectedFont, setSelectedFont] = useRecoilState(selectedFontAtom);
  const ref = useDetectClickOutside({
    onTriggered: () => showFontSelector && handleFontSelectorState(),
  });

  function handleFontSelectorState() {
    setShowFontSelector((prev) => !prev);
  }

  return (
    <div ref={ref} className="relative text-[#2d2d2d] dark:text-[#fff]">
      <div
        className="flex items-center gap-2 hover:cursor-pointer"
        onClick={handleFontSelectorState}
      >
        <div className="font-bold md:text-lg text-sm leading-6">
          {selectedFont.text}
        </div>
        <div>
          <img
            src={icon}
            className={`w-3 h-[6px] ${showFontSelector && "rotate-180"}`}
          />
        </div>
      </div>
      {showFontSelector && (
        <div className="z-10 bg-[#fff] dark:bg-[#1f1f1f] rounded-lg shadow-[0px_5px_30px_0px_#00000010] dark:shadow-[0px_5px_30px_0px_#a445ed] absolute right-0 top-8 flex flex-col justify-evenly py-2 font-bold md:text-lg text-sm leading-6 min-w-[183px]">
          {menu.map((item) => (
            <button
              key={item.value}
              onClick={() => setSelectedFont(item)}
              className={`w-full flex min-w-max p-2 px-6 hover:cursor-pointer hover:text-[#a445ed] ${item.value}`}
            >
              {item.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FontSelector;
