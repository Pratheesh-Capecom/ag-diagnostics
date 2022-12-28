import { useQuery } from "react-query";
import * as home from "services/serviceServices";

export const useService = () => {
    return useQuery("service", () => home.service(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}


