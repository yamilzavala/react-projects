import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, HomeLayout, Cocktail, Landing, Newsletter, SinglePageError } from "../pages";
import { landingLoader, getCocktailDetail } from "./loaders";
// import { loaderGetDrink as landingLoader } from './loaders/landingLoader'
import { action as newsletterAction } from "../pages/Newsletter";
import { queryClient } from "../queries/WrapperReactQuery";

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                loader: landingLoader(queryClient),
                errorElement: <SinglePageError/>
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
                path:'cocktail/:id',
                errorElement: <SinglePageError/>,
                loader: getCocktailDetail(queryClient),
                element: <Cocktail/>,
            },
            {
                path:'newsletter',
                action: newsletterAction,
                element: <Newsletter/>,
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