import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Default from "../layouts/Default";

let router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader: () => (console.log("loader path: /1")),
        children: [
            {
                index: true,
                loader: () => (console.log("loader path: /2")),
                element: <Default />
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