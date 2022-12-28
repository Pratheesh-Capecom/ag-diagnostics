import { useMutation } from "react-query";
import * as api from "services/contactServices";

export const useContact = () => {
    return useMutation((formData) => api.contact(formData));
}