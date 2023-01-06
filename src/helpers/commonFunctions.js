import moment from "moment";

export const dateFormat = (date) =>
    moment(date).format("DD");

export const yearFormat = (date) =>
    moment(date).format("MMM YYYY");