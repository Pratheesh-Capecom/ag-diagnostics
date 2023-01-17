import { useQuery } from "react-query";
import * as current from "services/covidServices";

export const useCovidList = () => {
    return useQuery("covidList", () => current.covidList(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}
