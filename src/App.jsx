import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { themeStateAtom } from "../atoms/themeState";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { selectedFontAtom } from "../atoms/selectedFont";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const themeState = useRecoilValue(themeStateAtom);
  const selectedFont = useRecoilValue(selectedFontAtom);

  useEffect(() => {
    const changeBodyColor = (theme) => {
      if (theme === "light") {
        document.body.className = "light";
        document.body.style = `background-color: #fff`;
      } else {
        document.body.className = "dark";
        document.body.style = `background-color: #050505`;
      }
    };
    themeState === "light" ? changeBodyColor("light") : changeBodyColor("dark");
  }, [themeState]);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div
          className={`w-full max-w-[736px] mx-auto md:my-10 my-5 px-5 md:px-0 text-xs primary-text ${selectedFont.value}`}
        >
          <Navbar />
          <Main />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
