function IconSearch({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 md:right-2 top-[calc(50%-7.775px)] px-4 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15.55px] h-[15.55px] group"
        viewBox="0 0 18 18"
      >
        <path
          fill="none"
          className="stroke-[#A445ED] group-hover:stroke-[#8831ca]"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
        />
      </svg>
    </div>
  );
}

export default IconSearch;
