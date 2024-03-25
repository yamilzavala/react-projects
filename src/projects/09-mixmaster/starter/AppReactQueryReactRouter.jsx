import './indexReactQueryReactRouter.css';
import WrapperRouterProvider from './router/RouterProvider';
import { ToastContainer } from 'react-toastify';

const AppReactQueryReactRouter = () => {
  return (
    <>
        <ToastContainer position='top-center'/>
        <WrapperRouterProvider>
          <h2>mixmaster starter</h2>
        </WrapperRouterProvider>
    </>
  );
};
export default AppReactQueryReactRouter;
