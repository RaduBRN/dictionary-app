const fetchData = async (input) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
  )
    .then((res) => res.json())
    .then((data) => {
      let tempData = data[0];

      let updatedMeanings = tempData?.meanings?.map((item, index) => {
        return {
          id: index,
          ...item,
        };
      });

      Object.keys(tempData).forEach((key) => {
        if (key === "meanings") {
          tempData[key] = updatedMeanings;
        }
      });

      return tempData;
    })
    .catch(() => {
      throw new Error("There was an error!");
    });

  return response;
};

export { fetchData };
