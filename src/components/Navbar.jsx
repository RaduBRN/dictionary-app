import { useRecoilState } from "recoil";
import { themeStateAtom } from "../../atoms/themeState";
import IconMoon from "../icons/IconMoon";
import FontSelector from "./FontSelector";

function Navbar() {
  const [themeState, setThemeState] = useRecoilState(themeStateAtom);

  function handleThemeChange() {
    themeState === "light" ? setThemeState("dark") : setThemeState("light");
  }

  return (
    <div className="flex justify-between gap-4">
      <a href="/">
        <img
          src="../assets/images/logo.svg"
          className="md:w-8 md:h-9 w-7 h-8"
        />
      </a>
      <div className="flex items-center gap-6">
        <FontSelector />
        <div className="h-full border-r" />
        <div className="flex justify-center items-center gap-2">
          <button
            className="relative bg-[#757575] dark:bg-[#A445ED] w-10 h-5 rounded-[10px]"
            onClick={handleThemeChange}
          >
            <div
              className={`absolute w-[14px] h-[14px] rounded-full bg-[#fff] ${
                themeState === "light" ? "left-1" : "right-1"
              } top-[3px]`}
            />
          </button>
          <IconMoon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
