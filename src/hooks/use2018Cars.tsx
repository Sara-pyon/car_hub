import APIClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';

interface Cars{
    model:string;
}

const apiClient = new APIClient<Cars>('/cars')

const useModel = () => useQuery({
    queryKey: ['2018'],
    queryFn: () => apiClient.get({
        params :{
            year: 2018
        },
    })
})

export default useModel