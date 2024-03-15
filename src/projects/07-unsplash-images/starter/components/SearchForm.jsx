import {useGlobalContext} from '../hooks/useGlobalContext';

const SearchForm = () => {
    const {setSearchValue} = useGlobalContext();

  
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue)  return;
        setSearchValue(searchValue)       
    }

    return (
        <section>         
           <h1 className="title">unsplash images</h1>  
           <form className='search-form' onSubmit={handleSubmit}>               
               <input type="text" className="form-input search-input" placeholder="Cat" name='search'/>
               <button className='btn' type='submit'>submit</button>
           </form>
        </section>
    );
};

export default SearchForm;