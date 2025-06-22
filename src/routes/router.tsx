import {
    createBrowserRouter
} from "react-router-dom";
import About from "../pages/About";
import LoginForm from "../pages/Login";
import Home from "../pages/Home";

let router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader: () => (console.log("loader path: /1")),
        children: [
            {
                index: true,
                loader: () => (console.log("loader path: /2")),
                element: <LoginForm />
            },
            {
                path: "home",
                loader: () => (console.log("loader path: /about")),
                element: <Home />
            },
            {
                path: "about",
                loader: () => (console.log("loader path: /about")),
                element: <About />
            }
        ]
    },
]);
export default router;