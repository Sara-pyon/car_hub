import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./page/Layout";
import FindYourCar from "./page/FindYourCar";

const router = createBrowserRouter([
    {path:'/', element: <Layout />, errorElement:<HomePage />,
    children: [
        {index:true, element: <HomePage /> },
        {path:'cars/find', element:<FindYourCar />},
        {path:'cars/find/:slug', element:<FindYourCar /> }
    ]
}
])

export default router;