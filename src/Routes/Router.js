import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Components/Home/Home";
import ProjectsDetails from "../Components/Home/Projects/ProjectsDetails/ProjectsDetails";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        }
            , {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
            , {
            path: '/About',
            element: <About></About>
        }, {
            path: '/projects/:category_id',
            element: <ProjectsDetails></ProjectsDetails>
        }
        ]
    }
])
export default router