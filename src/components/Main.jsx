import { useData } from "../../hooks/data-hook.js";
import Input from "./Input";
import Content from "./Content";
import emoji from "../../assets/icons/emoji.png";

function Main() {
  const { isError, data: apiData, isPending, mutate, reset } = useData();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 w-full">
        <Input mutate={mutate} reset={reset} />
        {isError && !isPending && (
          <div className="flex flex-col items-center justify-center gap-4 pt-28">
            <img src={emoji} className="md:w-16 w-8" />
            <h3 className="font-bold text-xl">No Definitions Found</h3>
            <p className="secondary-text text-center">
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        )}
        {apiData && <Content data={apiData} />}
        {apiData && (
          <div className="w-full">
            <div className="border-[#979797] border-t pt-5" />
            <div className="flex text-sm gap-2 md:gap-4 underline flex-wrap">
              <p className="text-secondary">Source</p>
              <a
                href={apiData?.sourceUrls}
                className="flex gap-1 items-center cursor-pointer truncate"
                target="_blank"
              >
                <p className="dark:text-[#fff] truncate">
                  {apiData?.sourceUrls}
                </p>
                <img
                  src="../assets/icons/externalLink.png"
                  className="w-3 h-3"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
