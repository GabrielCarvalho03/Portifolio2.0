import { createBrowserRouter  } from "react-router-dom";
import { Home } from "./page/home";
import { Projects } from "./page/projects";




export const Router = createBrowserRouter([
    {
    path:'/',
    element: <Home/>
},
{
    path:'/projects',
    element: <Projects/>
}


])