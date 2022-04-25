// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let ad=JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText=ad
let s=JSON.parse(localStorage.getItem("cart"))
s.forEach (function(el){


let box=document.createElement("div")
let p=document.createElement("P");
p.innerText=el.Title
let img= document.createElement("img")
img.src=el.Poster
// let btn=document.createElement("button")
box.append(img,p)
 document.getElementById("movie").append(box)
})

function ab(){
if(ad>=(document.getElementById("number_of_seats").value)*100){
   alert("booked") 
}
else{
   alert("Insuficient Balence!") 
}

}