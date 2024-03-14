import { ToastContainer } from 'react-toastify';
import Form from './components/Form';
import Items from './components/Items';
import './indexReactQuery.css';
import WrapperReactQuery from './components/WrapperReactQuery';

const AppReactQuery = () => {
  return (
    <WrapperReactQuery>
      <section className='section-center'>
        <ToastContainer position='top-center' />
        <Form />
        <Items/>
      </section>
    </WrapperReactQuery>
  );
};

export default AppReactQuery;
