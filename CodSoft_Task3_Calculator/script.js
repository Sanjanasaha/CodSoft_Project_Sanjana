let input = document.getElementById('output');
let button = document.querySelectorAll('button');
let str="";
arr=Array.from(button).forEach(button=>{
    button.addEventListener('click',(f)=>{
        if(f.target.innerHTML=='='){
           try{
            str=eval(str);
            input.value=str;
           }
           catch(err){
             str="ERROR";
             input.value=str;
           }
        }
        else if(f.target.innerHTML=='AC'){
            str="";
            input.value=str;
        }
        else if(f.target.innerHTML=='DEL'){
            str=str.substring(0,str.length-1);
            input.value=str;
        }
        else{
            str+=f.target.innerHTML;
            input.value=str;
        }
    })
})