import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { Cars } from "./use2018Cars";

const apiClient = new APIClient<Cars>('/cars');

const useNewCars = () => useQuery({
    queryKey: ['newCars'],
    queryFn: () => apiClient.get({
        params:{
            year: 2023
        }
    })
})

export default useNewCars