import { useMutation, useQuery } from "react-query";
import * as api from "services/homeVisitServices";

export const useHomeVisitPackageDropDown = () => {
    return useMutation((formData) => api.homeVisitPackageDropDown(formData));
}

export const useHomeVisit = () => {
    return useMutation((formData) => api.homeVisit(formData));
}

export const useHomeAreaList = () => {
    return useQuery("homeAreaList", () => api.homeAreaList(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}

