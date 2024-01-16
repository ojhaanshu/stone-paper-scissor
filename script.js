let rock = document.querySelector("#rock");
let paper= document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let myscore =document.querySelector("#yourS");
let compscore=document.querySelector("#compS");
let des =document.querySelector(".win-tag");
let restart =document.querySelector(".restart");
let temp=document.querySelector(".temp");
temp.style.visibility="visible";


let you=0;
let com=0;

function tempdraw(){
  temp.innerText="Draw";
   temp.style.backgroundColor="DarkOrange";
   temp.style.color="white";
   temp.style.visibility="visible";
}
function tempywim(){
  temp.innerText="You Win";
  temp.style.backgroundColor="GreenYellow";
  temp.style.color="Black";
 temp.style.visibility="visible";
}
function tempcwin(){
  temp.innerText="Computer Win's";
  temp.style.backgroundColor="OrangeRed";
  temp.style.color="Black";
 temp.style.visibility="visible";
}

rock.addEventListener("click", ()=>{
  let comp=Math.ceil(Math.random()*3);
  console.log("random"+comp);
 if(comp==1){
  myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:Rock \t Computer:rock";
  tempdraw();
 }
  else if(comp==2){
    com++;
     myscore.innerText=you; 
  compscore.innerText=com;
    des.innerText="You:Rock \t Computer:Paper";
    tempcwin();
  }
  else{
    you++;
    myscore.innerText=you; 
  compscore.innerText=com;
    des.innerText="You:Rock \t  Computer:Scissor";
    tempywim();
  }
  
});
paper.addEventListener("click", ()=>{
 let comp=Math.ceil(Math.random()*3);
  console.log("random"+comp);
 if(comp==1){
   you++;
   myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:paper \t Computer:rock";
   tempywim();

 }
  else if(comp==2){
    myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:paper \t Computer:paper";
   tempdraw();
  }
  else{
   com++;
    myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:paper \t Computer:scissor";
   tempcwin();
  }
  
});
scissor.addEventListener("click", ()=>{
  let comp=Math.ceil(Math.random()*3);
  console.log("random"+comp);
 if(comp==1){
    com++;
   myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:Scissor \t Computer:rock";
   tempcwin();
 }
  else if(comp==2){
    you++;
    myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:Scissor \t Computer:paper";
   tempywin();
  }
  else{
    myscore.innerText=you; 
  compscore.innerText=com;
   des.innerText="You:Scissor \t Computer:Scissor";
   tempdraw();
   
  }
  console.log("you"+you);
  console.log("computer"+com);
});

restart.addEventListener("click",()=>{
  you=0;
  com=0;
myscore.innerText=you;
compscore.innerText=com;
des.innerText="Start to Play"}
);

