import { useState, useTransition, Suspense, lazy } from 'react';
import vite from './vite.svg';
const SlowComponent = lazy(() => import('./SlowComponent'))

const LatestReact = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [pending, startTransition] = useTransition()

  const handleChange = (e) => {
    setText(e.target.value);

    console.log(pending)
    // slow down CPU
    startTransition(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img src={vite} alt='' />
          </div>
        );
      });
      setItems(newItems);
    })
    console.log(pending)
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {pending ? <h4>Loading...</h4> : (
          <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            marginTop: '2rem',
          }}
        >
          {items}
        </div>
      )}

      <button onClick={() => setShow(!show)}>toggle show</button>

      {show && (
        <Suspense fallback={<h4>Loading</h4>}>
          <SlowComponent/>
        </Suspense>
      )}
    </section>

  );
};
export default LatestReact;
