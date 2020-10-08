import { useState, useEffect } from "react"

const useGetProducts = (initialUrl, initialState) => {
    const [url, setUrl] = useState(initialUrl);
    const [products, setProducts] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        let didCancel = false;
        const fetchProducts = async () => {
            setIsError(false);
            setIsLoading(true);
            
            try {
                const result = await fetch(url);
                const data = await result.json();
                
                if(!didCancel) {
                    setProducts(data);
                }
            } catch (error) {
                if(!didCancel) {
                    setIsError(true);
                }
            }

            setIsLoading(false);
        };
    
        fetchProducts();
        return () => {
            didCancel = true;
        }

    }, [url])

    return [{ products, isLoading, isError }, setUrl]
}

export default useGetProducts