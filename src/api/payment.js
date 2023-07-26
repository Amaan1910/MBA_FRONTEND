import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstance";

export const makePayment = async (payment) => {
  try {
    const { data } = await AxiosInstance.post(`/mba/api/v1/payments`, payment);
    return data;
  } catch (ex) {
    toast.error(ex.message);
    console.log(ex);
  }
};
