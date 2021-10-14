let dec=document.getElementById("dec");
let re=document.getElementById("re");
let inc=document.getElementById("inc");
let count=document.getElementById("count");


let i=0;
count.innerHTML=i;
   let deccounter= () =>{
        i--;
        count.innerHTML=i;
    }
   let inccounter= () =>{
        i++;
        count.innerHTML=i;
    }
   let recounter= () =>{
        i=0;
        count.innerHTML=i;
    }

dec.addEventListener("click",deccounter);
re.addEventListener("click",recounter);
inc.addEventListener("click",inccounter);
