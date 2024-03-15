import { useQuery } from "@tanstack/react-query";
import fetchCustomPhotos from "../axios/utils";
import { toast } from "react-toastify";

export const useFetchPhotos = (searchValue) => {

    const {isLoading, error, isError, data} = useQuery({
        queryKey: ['images',searchValue],
        queryFn: async () => {
            const {data} = await fetchCustomPhotos(`/?query=${searchValue}`);
            return data;
        },
        onError: (error) => {
            toast.error(error.response.data.msg)
        }
    })
    
    return {
        isLoading, error, isError, data
    }
}