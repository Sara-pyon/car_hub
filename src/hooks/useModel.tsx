import APIClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';

interface Cars{
    model:string;
}

const apiClient = new APIClient<Cars>('/models')

const useModel = () => useQuery({
    queryKey: ['model'],
    queryFn: apiClient.getAll
})

export default useModel