// Store the wallet amount to your local storage with key "amount"
let ar=JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText=ar
console.log(ar)
let arr=[]
function func(){
 let a=document.getElementById("amount").value
console.log(a)
arr.push(a)
localStorage.setItem("amount",JSON.stringify(a))


}

// let total=ar.reduce(function(sum,elem,index,arr){
//  total   return sum+Number(elem.amount)
// },0)
// console.log(total)
