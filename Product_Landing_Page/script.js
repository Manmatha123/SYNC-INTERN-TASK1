const humburger=document.getElementById("humburgerclick");
const headul=document.getElementById("headul");
const crossclick=document.getElementById("crossclick");

crossclick.addEventListener("click",()=>{
    headul.style.height="0px";
  humburger.style.visibility="visible";
  crossclick.style.visibility="hidden";
})

humburger.addEventListener("click",()=>{
    headul.style.height="200px";
    crossclick.style.visibility="visible";
  humburger.style.visibility="hidden";
})