import { useQuery, useMutation } from "react-query";
import * as news from "services/newsServices";


export const useNews = () => {
    return useMutation((formData) => news.news(formData));
}

export const useNewsId = (id) => {
    return useQuery(["newsId", id], () => news.newsId(id), {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
    });
}