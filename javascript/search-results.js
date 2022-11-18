let query = location.search; //Obtengo la QS
let stringToObject = new URLSearchParams(query); //La trasnformo en OL
let aBuscar = stringToObject.get('querys'); //Obtengo los datos de una propiedad con get()


let url = `https://api.themoviedb.org/3/search/movie?query=${aBuscar}&api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1&include_adult=false`
let url2=`https://api.themoviedb.org/3/search/tv?query=${aBuscar}&api_key=2a3601e42fea0b8cec36fb4c1999c023&language=en-US&page=1&include_adult=false`
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let container = document.querySelector('.elementos_hijos');
        let characters = '';

        for(let i=0; i<info.length; i++){
            characters += `<article>
                                <a href="./detail-movie.html?id=${info[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w500${info[i].poster_path}" alt="poster path movie">
                                    <p>Name: ${info[i].title}</p>
                                </a>
                            </article>`
        }
        container.innerHTML = characters;

        
    })
        
    .catch(function(error){
        console.log(error);
    })
