import { useMutation, useQuery } from "react-query";
import * as api from "services/packageServices";

export const usePackages = () => {
    return useMutation((formData) => api.packages(formData));
}

export const usePackageId = (id) => {
    return useQuery(["packageId", id], () => api.packageId(id), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}

export const useEnquiry = () => {
    return useMutation((formData) => api.enquiry(formData));
}