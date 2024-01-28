import APIClient from '../services/apiClient';
import { useQuery } from '@tanstack/react-query';
import useCarQueryStore from '../store/carQueryStore';

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

const apiClient = new APIClient<Cars>('/cars');

const useCars = () =>{ 

    const carQuery  = useCarQueryStore(s => s.carQuery);
    
    return useQuery<Cars[], Error>({
    queryKey: ['cars', carQuery],
    queryFn: () => apiClient.get({
        params :{
            year: carQuery.year,
            fuel_type: carQuery.fuel,
            make: carQuery.make,
            drive: carQuery.drive,
            transmission: carQuery.transmission,
        },
    }),
})
}

export default useCars