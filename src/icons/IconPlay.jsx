function IconPlay({ audio }) {
  let source = audio ? new Audio(audio["audio"]) : undefined;

  const playAudio = () => {
    source ? source.play() : undefined;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="md:w-[75px] md:h-[75px] w-12 h-12"
      viewBox="0 0 75 75"
      onClick={playAudio}
    >
      <g
        fillRule="evenodd"
        className="fill-[#a445ed] hover:cursor-pointer group"
      >
        <circle
          cx="37.5"
          cy="37.5"
          r="37.5"
          className="opacity-25 group-hover:opacity-100"
        />
        <path
          d="M29 27v21l21-10.5z"
          className="fill-[#a445ed] group-hover:fill-[#fff]"
        />
      </g>
    </svg>
  );
}

export default IconPlay;
