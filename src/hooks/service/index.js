import { useMutation } from "react-query";
import * as home from "services/serviceServices";

export const useService = () => {
    return useMutation((formData) => home.service(formData));
}