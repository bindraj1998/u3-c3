// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let id;
 async function func(){

try{
    const query=document.getElementById("search").value
   console.log(query) 
// const res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${q}


const res=await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${query}`);
const data=await res.json()
console.log(data)
 const mo=data.Search
//  console.log(mo)
//  console.log(movies)
 return mo

}catch(err){
    console.log(err)
}
}
function appendmovies(data){

data.forEach(function (el){
   let box=document.createElement("div")
let p=document.createElement("P");
p.innerText=el.Title
let img= document.createElement("img")
img.src=el.Poster
let btn=document.createElement("button")
box.append(img,p,btn)
document.getElementById("movies").append(box)

btn.innerText="booknow"
btn.addEventListener("click",function(){
addtocart(el)

})

})

}

function addtocart(el){

cart.push(el)
localStorage.setItem("cart",JSON.stringify(cart))
window.location.href="checkout.html"

}

async function main(){
    let data=await func()
    if(data==undefined){
        return false
    }
    appendmovies(data)
}


function debounce(func,delay){

if(id){
    clearTimeout(id);

}
id=setTimeout(function(){
   
    func();

},delay)


}


