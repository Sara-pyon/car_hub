import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import Layout from "../page/Layout";
import FindYourCar from "../page/FindYourCar";
import SellOrTrade from "../page/SellOrTrade";
import HowItWorks from "../page/HowItWorks";
import CarFinance from "../page/CarFinance";

const router = createBrowserRouter([
    {path:'/', element: <Layout />, errorElement:<HomePage />,
    children: [
        {index:true, element: <HomePage /> },
        {path:'cars/find', element: <FindYourCar />},
        {path:'cars/find/:slug', element: <FindYourCar /> },
        {path:'sell', element: <SellOrTrade />},
        {path:'how', element: <HowItWorks />},
        {path:'finance', element: <CarFinance />}
    ]
}
])

export default router;