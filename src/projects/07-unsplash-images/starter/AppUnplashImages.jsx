import Gallery from './components/Gallery';
import SearchForm from './components/SearchForm';
import ThemeToggle from './components/ThemeToggle';
import AppUnsplashProvider from './context/globalContext';
import WrapperReactQuery from './react-query/WrapperReactQuery';
import './indexUnplashImages.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const AppUnplashImages = () => {
  return (
    <AppUnsplashProvider>
        <WrapperReactQuery>
          <ThemeToggle/>
          <SearchForm/>
          <Gallery/>
          <ReactQueryDevtools initialIsOpen={false}/>
        </WrapperReactQuery>
    </AppUnsplashProvider>
  );
};
export default AppUnplashImages;
