import { defaultUrl } from "./config";

export const unAuthenticatedPostRequest= (route,body)=>{
    console.log(defaultUrl)
    return fetch(defaultUrl+route,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(body)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        return data
    })
    .catch((error) => {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error to propagate it
    });

}


