const ApiService = {

    Films : () =>{
        return fetch('https://swapi.dev/api/films/1')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    }
,
    ListaPeople : () =>{
        return fetch('https://swapi.dev/api/people/')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    Starships : () =>{
        return fetch('https://swapi.dev/api/starships/2')
        .then(res => ApiService.TrataErros(res))
        .then(res => res.json());
    },
    TrataErros : res =>{
        if(!res.ok){
            throw Error(res.responseText);
        }
        return res;
    } 

}

export default ApiService;
