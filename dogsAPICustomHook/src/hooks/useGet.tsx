import { useEffect, useState } from "react";
import axios from "axios";


const useGet = (url: string) => {
    console.log("in useGet")
    const [message, setMessage] = useState(null);

    async function getDogs(url: string){
        const {data} = await axios.get(url);
        const {message} = data;
        console.log("recieved: " , message)
    }
    
    useEffect(() => {
        getDogs(url)
        }, [url]);
        return { message };
    };
    
export default useGet;