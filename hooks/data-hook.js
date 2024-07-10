import { useMutation } from "@tanstack/react-query";
import { fetchData } from "../services/data-service";

function useData() {
  return useMutation({
    mutationKey: ["data"],
    mutationFn: (input) => fetchData(input),
    refetchOnWindowFocus: false,
  });
}

export { useData };
