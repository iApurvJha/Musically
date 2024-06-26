import { defaultUrl } from "./config";

export const unAuthenticatedPostRequest= (route,body)=>{
    console.log(defaultUrl)
    console.log("i am uaunthicated req body")
    console.log(body)
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
// export const AuthenticatedPostRequest= (route,body,token)=>{
//     console.log(defaultUrl)
//     console.log(body)
//     return fetch(defaultUrl+route,{
//         method:"POST",
//         headers:{
//             "content-type":"application/json",
//             "Authorization":`Bearer ${token}`
//         },
//         body:JSON.stringify(body)
//     })
//     .then((res)=>{
//         return res.json()
//     })
//     .then((data)=>{
//         console.log(data)
//         return data
//     })
//     .catch((error) => {
//         console.error('Fetch error:', error);
//         throw error; 
//     });

// }
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

export const AuthenticatedPostRequest = (route, body, token) => {
    const url = defaultUrl + route; // Assuming defaultUrl is defined somewhere accessible
    console.log("i am authenticated request body")
    console.log(body)
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        console.log('Response data:', data);
        return data;
    })
    .catch((error) => {
        console.error('Fetch error:', error);
        throw error; // Re-throw the error to propagate it further
    });
};




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
  
  
  


