import axiosInstance from "./axiosInstance";
import axios, {AxiosResponse} from "axios";

const fetcher = async (url: string): Promise<any> => {
    try {
        const response: AxiosResponse = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw error.response;
        }
        throw error;
    }
}

export default fetcher;