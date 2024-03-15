import React, {useEffect} from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { useFetchPhotos } from '../hooks/useReactQueryCustomHook';


const Gallery = () => {
    const {searchValue} = useGlobalContext();
    console.log(searchValue)
    const { isLoading, error, isError, data} = useFetchPhotos(searchValue);

    
    const renderedPhotos = data?.results.map((photo,idx) => {
        const {alt_description, urls: {regular}} = photo;
        return (<img key={idx} className='img' src={regular} alt={alt_description} />)
    })

    if(isLoading) return (<section className='image-container'>Loading...</section>)
    if(isError) return (<section className='image-container'>Error... {error}</section>)
    if(data?.results.length < 1) return (<section className='image-container'>No data found... {error}</section>)

    return (
        <section className='image-container'>
             {renderedPhotos}
        </section>
    );
};

export default Gallery;