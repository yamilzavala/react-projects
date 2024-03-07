import { useEffect, useState } from "react";

export const UseFetchData = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState();

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    },[url])

    return {
        loading,
        data, 
        error
    }
}