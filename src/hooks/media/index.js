import { useQuery } from "react-query";
import * as home from "services/mediaServices";

export const useMedia = () => {
    return useQuery("Media", () => home.media(), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}