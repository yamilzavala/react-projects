import './indexAxios.css';
import Title from './components/Title';
import Setup from './examples/1-first-request'
import Headers from './examples/2-headers'
import Post from './examples/3-post-request'
import Global from './examples/4-global-instance'
import Custom from './examples/5-custom-instance'
import Interceptors from './examples/6-interceptors'
// import './axios/global'

function AppAxios() {
  return (
    <main className='main-container'>
      <Title />
      {/* <Setup/> */}
      {/* <Headers/> */}
      {/* <Post/> */}
      {/* <Global/> */}
      {/* <Custom/> */}
      <Interceptors/>
    </main>
  );
}

export default AppAxios;
