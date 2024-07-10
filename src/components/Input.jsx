import { useState } from "react";
import IconSearch from "../icons/IconSearch";

function Input({ mutate, reset }) {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  function handleError() {
    inputValue.length === 0 ? setIsError(true) : setIsError(false);
  }

  function handleChange(e) {
    e.target.value === 0 ? setIsError(true) : setIsError(false);
    setInputValue(e.target.value);
  }

  function handleMouseClick() {
    reset();
    handleError();
    if (inputValue.length > 0) mutate(inputValue);
  }

  function handleKeyboardType(event) {
    if (event.key === "Enter") {
      reset();
      handleError();
      if (inputValue.length > 0) mutate(inputValue);
    }
  }

  return (
    <>
      <div className="relative bg-[#f4f4f4] dark:bg-[#1f1f1f] w-full md:h-[64px] h-[48px] mt-5 rounded-2xl">
        <input
          type="text"
          className={`w-full h-full  md:p-6 p-4 bg-transparent ring-1 ring-transparent pr-12 truncate  ${
            isError ? "!ring-[#ff5252]" : "focus:ring-[#a445ed]"
          } focus:ring-1 focus:outline-none rounded-2xl font-bold md:text-xl`}
          placeholder="Search for any word..."
          value={inputValue || ""}
          onChange={(event) => handleChange(event)}
          onKeyDown={(event) => handleKeyboardType(event)}
        />
        <IconSearch onClick={handleMouseClick} />
      </div>
      {isError && (
        <div className="text-[#ff5252] text-sm -mt-2">
          Whoops, can't be empty...
        </div>
      )}
    </>
  );
}

export default Input;
