import APIClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';

export interface Cars{
    model:string;
    make: string;
    drive: string;
    year: string;
    transmission: string;
    city_mpg: number;
    class: number;
}

const apiClient = new APIClient<Cars>('/cars')

const use2018Cars = () => useQuery<Cars[], Error>({
    queryKey: ['2018'],
    queryFn: () => apiClient.get({
        params :{
            year: 2018
        },
    })
})

export default use2018Cars