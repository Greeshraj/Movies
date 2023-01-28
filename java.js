const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moviebox = document.querySelector("#movie-box")

const getmovies= async (api)=>{
const response = await fetch(api)
const data = await response.json()
// console.log(data)
showmovies(data.results)
}
const showmovies=(data)=>{
//    console.log(data)
moviebox.innerHTML="";
   data.forEach(element => {
     const box = document.createElement("div")
     box.classList.add("box")
     box.innerHTML = `
     <img src="${IMGPATH + element.poster_path}" alt="" />
     <div class="overlay">
     <div class="title"> 
     <h2> ${element.original_title}  </h2>
      <span> ${element.vote_average} <span>
     </div>
     <h3>Overview:</h3>
     <p> 
        ${element.overview}
    </p>
     </div>
 `;
 moviebox.appendChild(box)
   });
}
getmovies(APIURL)

// const search = document.querySelector("#search")
document.querySelector("#search").addEventListener(
    "keyup",
    function(event){
if(event.target.value !=""){
    getmovies(SEARCHAPI + event.target.value)
}
    else{
getmovies(APIURL)
    }
    }
)
getmovies(APIURL)
// box.innerHTML = `
// <img src="${imagePath}" alt="" />
// <div class="overlay">
//     <div class="title"> 
//         <h2> ${result.original_title}  </h2>
//         <span> ${result.vote_average} <span>
//     </div>
//     <h3>Overview:</h3>
//     <p> 
//         ${result.overview}
//     </p>
//  </div>
