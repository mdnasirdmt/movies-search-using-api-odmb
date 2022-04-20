let id;

async function searchMovies(){
   try{
    const query = document.getElementById("query").value;
    
    const res = await fetch(`https://www.omdbapi.com/?apikey=d806bd70&s=${query}`);
 
    const data = await res.json();
    // console.log(data)
 
        return data.Search;
   
    // appendMovies(movies)
   }catch(err){
       console.log(err)
   }
}

let movies_div = document.getElementById("movie");
function appendMovies(data){

    // if(data === undefined){
    //     return false;
    // }

    movies_div.innerHTML= null;
    data.forEach(ele => {
        let img = document.createElement("img");
        img.src=ele.Poster;
        let p = document.createElement("p");
        p.innerText=ele.Title;
        movies_div.append(img,p)
    });
}


async function main(){
    let data = await searchMovies();
    // console.log(data)
    if(data === undefined){
        return false;
    }
    appendMovies(data);
}


function debouunce(func,delay){

    if(id){
        clearTimeout(id);
    }

    let id = setTimeout(function(){
        func();
    },delay);

}