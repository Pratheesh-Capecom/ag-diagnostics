import { useQuery, useMutation } from "react-query";
import * as current from "services/currentOpeningServices";

export const useCurrentOpenings = () => {
    return useQuery("CurrentOpenings", () => current.currentOpenings(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}

export const useApplyNow = () => {
    return useMutation((formData) => current.applyNow(formData));
}



