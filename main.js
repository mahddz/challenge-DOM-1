
// function
let middlep = document.querySelector(".middle-p")
let subt = false
function onchangeText(input) {
    document.querySelector(".main-p").innerHTML = input.value
    
}
document.getElementById("btn").addEventListener("click",function(){
   if (!subt) {
     subt = true
     let child = middlep.firstChild
     middlep.removeChild(child)
    
   }
    let text = document.getElementById("text-input").value
    let textNode = document.createTextNode(text)
    middlep.appendChild(textNode)
    let brline = document.createElement("br")
    middlep.appendChild(brline)

})
middlep.addEventListener("mouseover",function(){
if (subt) {
    middlep.style.background = "green"
}else{
    middlep.style.background = "red"
}


})

middlep.addEventListener("mouseout",function(){
middlep.style.background = "white"


})







