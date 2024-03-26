import './indexReactQueryReactRouter.css';
import WrapperRouterProvider from './router/RouterProvider';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import WrapperReactQuery from './queries/WrapperReactQuery';



const AppReactQueryReactRouter = () => {
  return (
     <WrapperReactQuery>
        <ToastContainer position='top-center'/>
        <WrapperRouterProvider>
          <h2>mixmaster starter</h2>
        </WrapperRouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
    </WrapperReactQuery>
  );
};
export default AppReactQueryReactRouter;
