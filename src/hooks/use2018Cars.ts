
import APIClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';

export interface Cars{
    model:string;
    make: string;
    drive: string;
    year: string;
    transmission: string;
    city_mpg: number;
    class: string;
    fuel_type: string;
}

const apiClient = new APIClient<Cars>('/cars')

const use2018Cars = (selectedFuel: string) => useQuery<Cars[], Error>({
    queryKey: ['2018', selectedFuel],
    queryFn: () => apiClient.get({
        params :{
            year: 2018,
            fuel_type: selectedFuel
        },
    }),
})

export default use2018Cars