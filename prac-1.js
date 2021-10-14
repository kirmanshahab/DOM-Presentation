let week2 = document.getElementById('week-2');
week2.hidden = true;
let btn  = document.getElementById('btn');

btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = 'blue';
    if(week2.hidden!=true){
       return week2.hidden=true;
    }
    else{
        return week2.hidden=false;
    }
    
  
});


// btn.onclick = ()=>{
//     if(week2.hidden!=true){
//         return week2.hidden=true;
//     }
//     else{
//         return week2.hidden=false;
//     }
// }



