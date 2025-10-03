import { format } from "date-fns";

export const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const getUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  }
  return null;
};
export const dateFormated = (date) => {
  return format(new Date(date), "dd-mm-yyyy");
};


