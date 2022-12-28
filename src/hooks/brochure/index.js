import { useMutation } from "react-query";
import * as api from "services/brochureServices";

export const useBrochure = () => {
    return useMutation((formData) => api.brochure(formData));
}