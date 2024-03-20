import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, HomeLayout, Cocktail, Landing, Newsletter } from "../pages";
import { loaderGetDrink as landingLoader } from './loaders/landingLoader'


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                loader: landingLoader
            },
            {
                path:'about',
                element: <About/>,
                children: [
                    {
                        path: 'ourcompany',
                        element: <h2>Our company</h2>
                    },
                    {
                        path:'person',
                        element: <h2>Yamil zavala</h2>
                    },
                ]
            },
            {
                path:'cocktail',
                element: <Cocktail/>
            },
            {
                path:'newsletter',
                element: <Newsletter/>
            },
        ]
    },  
])

const WrapperRouterProvider = ({children}) => {
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>)
}

export default WrapperRouterProvider;