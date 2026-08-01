
const PASSWORD="2210";

window.onload=()=>{
 setTimeout(()=>{
   document.getElementById("loader").style.display="none";
   document.getElementById("passwordPage").style.display="flex";
 },2200);
};

function checkPass(){
 const p=document.getElementById("pass").value;
 if(p===PASSWORD){
   document.getElementById("passwordPage").style.display="none";
   document.getElementById("main").style.display="flex";
   typeMessage();
 }else{
   document.getElementById("wrong").innerText="❌ Wrong Password";
 }
}

const msg="Today is all about you, Riya ❤️. Thank you for bringing love, smiles and happiness into my life. This little surprise is made with all my heart. — Forever Yours, Fattu ❤️";
let i=0;
function typeMessage(){
 const el=document.querySelector(".typing");
 const timer=setInterval(()=>{
   el.textContent+=msg.charAt(i);
   i++;
   if(i>=msg.length) clearInterval(timer);
 },40);
}

document.addEventListener("click",e=>{
 if(e.target.id==="startBtn"){
   alert("🎁 Next surprise pages will be added in the next files.");
 }
});


document.getElementById("nextBtn")?.addEventListener("click",()=>alert("Cake Time!"));
function cutCake(){
 document.querySelector(".cake").textContent="🍰";
 document.getElementById("cakeText").textContent="🎉 Happy Birthday Riya ❤️";
}
