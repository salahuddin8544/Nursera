import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Main/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Sercices/Services";
import Appoinment from "../Pages/Appoinment/Appoinment";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'services',
                element:<Services/>
            },
            {
                path:'appoinment',
                element:<Appoinment/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
          
        ]),
        
        
    },
])
export default router