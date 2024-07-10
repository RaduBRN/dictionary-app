import React from "react";

function Meaning({ data }) {
  return (
    <div className="flex flex-col md:gap-6 gap-8">
      <div className="w-full flex items-center gap-4">
        <p className="primary-text font-bold italic md:text-2xl text-lg">
          {data?.partOfSpeech}
        </p>
        <div className="flex-grow border-[0.5px] border-[#979797]" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:gap-6 gap-4">
          <p className="md:text-xl text-base secondary-text">Meaning</p>
          <ul className="md:text-lg text-[15px] leading-6 list-disc list-outside marker:text-[#a445ed] flex flex-col gap-4 [&_li]:ml-10 [&_li]:pl-3">
            {data?.definitions?.map((item, index) => (
              <React.Fragment key={index}>
                {item?.definition && <li>{item.definition}</li>}
                {item?.example && (
                  <li className="list-none secondary-text">"{item.example}"</li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
        {data?.synonyms?.length > 0 && (
          <div className="flex gap-2 md:text-xl text-base">
            <p className="text-secondary">Synonyms</p>
            <p className="font-bold text-[#a445ed] cursor-pointer hover:underline">
              {data?.synonyms.map((synonym, index) => (
                <span key={index}>
                  {synonym}
                  {index < data?.synonyms.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Meaning;
