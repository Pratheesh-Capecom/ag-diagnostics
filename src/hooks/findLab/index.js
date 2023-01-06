import { useMutation } from "react-query";
import * as api from "services/findLabServices";

export const useFindLab = () => {
    return useMutation((formData) => api.findlab(formData));
}