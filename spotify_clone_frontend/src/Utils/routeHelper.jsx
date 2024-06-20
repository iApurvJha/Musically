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
export const AuthenticatedPostRequest= (route,body,token)=>{
    console.log(defaultUrl)
    return fetch(defaultUrl+route,{
        method:"POST",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
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
        throw error; 
    });

}
export const unAuthenticatedGetRequest = (route,token)=>{
    const url=defaultUrl+route
    return fetch(url,{
        method:"GET",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        return data
    })
    .catch((err)=>{
        console.log(`i am fetch error from frontEnd ${err}`)
        throw err
    })

    
}



// const getCookie = (name) => {
//     const nameEQ = name + "=";
//     const decodedCookie = decodeURIComponent(document.cookie);
//     const cookies = decodedCookie.split(';');
//     for (let i = 0; i < cookies.length; i++) {
//       let cookie = cookies[i].trim();
//       if (cookie.indexOf(nameEQ) === 0) {
//         return cookie.substring(nameEQ.length, cookie.length);
//       }
//     }
//     return null;
//   };
  
  
  


