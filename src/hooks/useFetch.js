import { useEffect, useState } from 'react';

const useFetch = url => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [url]);

    return { data, loading };
}

export default useFetch;