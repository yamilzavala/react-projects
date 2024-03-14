import { useFetchTasks } from '../hooks/reactQueryCustomHook';
import SingleItem from './SingleItem';

const Items = () => {

  const {fetchTasks} = useFetchTasks()

  const {isLoading, data, error, isError} = fetchTasks;

  if(isLoading) return <p>Loading....</p>

  if(isError) return <p>Error....{error.response.data}</p>

  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
