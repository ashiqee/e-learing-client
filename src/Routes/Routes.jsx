import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/Auth/Registration";
import Login from "../pages/Auth/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,

        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Registration />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
]);

export default router;