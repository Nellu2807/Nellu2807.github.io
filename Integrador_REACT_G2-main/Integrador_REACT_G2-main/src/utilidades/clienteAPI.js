const API = "https://rickandmortyapi.com/api/character"


export const get = (path)=>{
    return fetch (API+path,{
headers:{
    "Content-Type": "application/json;charset=utf-8",

}
}).then((results)=>results.json())
}

