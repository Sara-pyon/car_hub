import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'https://car-api2.p.rapidapi.com/api',
    headers: {
        'X-RapidAPI-Key' : '4b4776850dmsha4e95db4f77dc6ap17ec11jsn08ddff972c92',
        'X-RapidAPI-Host' : 'car-api2.p.rapidapi.com'
    },
    params:{
        limit: 30
    }
})

class APIClient<T>{
    endpoint: string;
    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getAll = () => {
        return axiosInstance.get<T>(this.endpoint)
                            .then(res => res.data);
    }

}
export default APIClient;