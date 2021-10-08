import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [tasks, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    
    // This is a clean up to handle when a request is deliberately aborted
    const abortCont = new AbortController();

    useEffect(() => {
        setTimeout(() => {
            // An abort controller function is passed along with the endpoint
            fetch(url, { signal: abortCont.signal })
            .then(response => {
                // console.log(response)
                if(!response.ok){
                    throw Error("Data Could not be fetched")
                }
                return response.json()
            })
            .then(data => {
                // console.log(data); 
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(error => {
                if (error.name === 'AbortError'){
                    console.log('fetch aborted')
                }
                else{
                    setIsPending(false)
                    setError(error.message)
                }
                
            })
        }, 800);
        return () => abortCont.abort();
    }, [url]);

    // I am returning the state so that I can use it in any other component in the future
    return {tasks, isPending, error}
        
}

export default useFetch
