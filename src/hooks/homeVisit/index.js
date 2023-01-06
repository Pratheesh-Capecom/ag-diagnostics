import { useMutation } from "react-query";
import * as api from "services/homeVisitServices";

export const useHomeVisitPackageDropDown = () => {
    return useMutation((formData) => api.homeVisitPackageDropDown(formData));
}

export const useHomeVisit = () => {
    return useMutation((formData) => api.homeVisit(formData));
}
