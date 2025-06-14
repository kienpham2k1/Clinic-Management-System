import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";



let router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        loader: () => (console.log("loader path: /1")),

        children: [
            {
                index: true,
                loader: () => (console.log("loader path: /2")),
                element: <Home />
            },
            {
                path: "about",
                loader: () => (console.log("loader path: /about")),
                element: <About />
            }
        ]
    },
    // {
    //     path: "logout",
    //       action(){
    //         // do some logout action 
    //         console.log("logout call")
    //         return redirect("/")
    //     }
    // }
]);

export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}