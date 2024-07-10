import IconPlay from "../icons/IconPlay";
import Meaning from "./Meaning";

function Content({ data }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap w-full justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-[32px] md:text-[64px] leading-normal truncate max-w-[250px] md:max-w-[600px] lg:max-w-[650px]">
            {data?.word}
          </h2>
          <p className="text-[#a445ed] md:text-2xl text-lg leading-normal">
            {data?.phonetics[1]?.text}
          </p>
        </div>
        <IconPlay audio={data?.phonetics[0]} />
      </div>
      {data?.meanings?.map((obj) => (
        <Meaning key={obj.id} data={obj} />
      ))}
    </div>
  );
}

export default Content;
