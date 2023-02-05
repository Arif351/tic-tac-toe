import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])