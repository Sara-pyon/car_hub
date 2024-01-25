import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1',
    headers: {
        'X-Api-Key': 'fRFLz1ZQCpmpSpza+wFOEg==ovmkFYyFshYmuIiq',
        'X-RapidAPI-Key': '4b4776850dmsha4e95db4f77dc6ap17ec11jsn08ddff972c92',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    },
    params:{
        limit: 50,
    }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    get = (config : AxiosRequestConfig) => {
        return axiosInstance.get<T[]>(this.endpoint, config)
                            .then(res => res.data);
    }

}
export default APIClient;