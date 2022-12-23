import { useMutation, useQuery } from "react-query";
import * as home from "services/homeServices";

export const usePackages = () => {
    return useMutation((formData) => home.packages(formData));
}

export const useBanner = () => {
    return useQuery("Banner", () => home.banner(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}

export const useTestimonial = () => {
    return useQuery("Testimonial", () => home.testimonial(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}

export const useCity = () => {
    return useQuery("City", () => home.city(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}


