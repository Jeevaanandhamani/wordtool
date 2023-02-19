document.getElementById("submity").onclick = function (){
  let para = document.getElementById("sentence").value;
  let paratrim = para.trim();
  let parasplit = paratrim.split(' ');
  let count = parasplit.length;
  let temp = 0;
  let spaces=0;
  let tlength = para.length;
  let extraspaces;
  
  
  for (let i = 0; i<count; i++){
    if(parasplit[i]!=''){
      temp = temp +1;
    }
    else{
      
      
      spaces = spaces + 1;
    }
  }
  
 
  let totalength = paratrim.length;
  let wordspaces = temp-1;
  let finalcharlength = totalength - wordspaces - spaces;
  extraspaces=tlength - finalcharlength;
document.getElementById("fnwords").innerHTML=temp+" words";
document.getElementById("fnchar").innerHTML= 
  finalcharlength+" characters";
  document.getElementById("fnspace").innerHTML
  = extraspaces + " spaces";

}

document.getElementById("submity2").onclick = function(){
  let para = document.getElementById("sentence").value;
  let paratrim = para.trim();
  let lowercasepara=paratrim.toLowerCase();
  let userinput=document.getElementById("specificchar").value;
  if(userinput==''){
    document.getElementById("fnspchar").innerHTML= "0 Times";
  }
  else{
  let lcuserinput = userinput.toLowerCase();
  let precharcount = lowercasepara.split(lcuserinput);
  let fncharcount=precharcount.length -1;
 if(fncharcount<=0) {
   document.getElementById("fnspchar").innerHTML= "0 Times";
 }
 else{
   document.getElementById("fnspchar").innerHTML= fncharcount+" Times"
 }
  
}  
}


document.getElementById("resety").onclick = function(){
    document.getElementById("sentence").value='';
  }

document.getElementById("replacey").onclick=function(){
 let userswap=document.getElementById("swap1").value;
 let paraswap=document.getElementById("swap2").value;
 if(userswap!='' && paraswap!=''){
 
 let parafull = document.getElementById("sentence").value;
 let lowercaseui = userswap.toLowerCase();
 let uppercaseui = userswap.toUpperCase();
 let lowercasepara = paraswap.toLowerCase();
 let uppercasepara = paraswap.toUpperCase();
let swappedpara = parafull.replaceAll(lowercaseui,lowercasepara);
let finalswappedpara = swappedpara.replaceAll(uppercaseui,uppercasepara);
document.getElementById("sentence").value  =finalswappedpara;
}
else{
  let cu;
  cu++;
}
}

document.getElementById("replacey1").onclick=function(){
 let userswap=document.getElementById("swap3").value;
 let paraswap=document.getElementById("swap4").value;
 
 let parafull = document.getElementById("sentence").value;
 let indexval = parafull.indexOf(userswap);
 if(userswap!='' && paraswap!='' && indexval>=0){
 
let finalswappedpara = parafull.replaceAll(userswap,paraswap);
document.getElementById("case").innerHTML =         "(Case Sensitive)";
document.getElementById("sentence").value  =finalswappedpara;
}
else{
  document.getElementById("case").innerHTML =         "check your spelling"
}
}