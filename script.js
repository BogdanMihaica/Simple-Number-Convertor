let button=document.getElementById('conv');
let buttonAnimPhase=1;
const playButtonAnim= async ()=>{
    if(buttonAnimPhase==1)
    {
        button.style.boxShadow='0 0 100px 10px gold';
        button.style.transition='all 0s';
        buttonAnimPhase++;
        setTimeout(playButtonAnim, 1);
    }
    else 
    {
        button.style.transition='all 1.5s ease-out';
        button.style.boxShadow='0 0 100px 10px transparent';
        buttonAnimPhase=1;
    }
    
}

let switchValues = ()=>{
    aux = document.getElementById('base1').value;
    document.getElementById('base1').value = document.getElementById('base2').value;
    document.getElementById('base2').value = aux;
};
let constructFunction = ()=>{
    playButtonAnim();
    let numInput = document.getElementById('num').value;
    let baseInput = document.getElementById('base1').value;
    let toBaseInput = document.getElementById('base2').value;

    convertFromTo(numInput,baseInput,toBaseInput);
}
let output = (str)=>{
    let string= document.getElementById('output');
    string.innerHTML="Output: ";
    string.innerHTML += str;
  
}
const convertFromTo = (num, base, secondBase)=>{
    let newNumber=parseInt(num, base);
    let finalNumber=newNumber.toString(secondBase).toUpperCase();
    console.log(finalNumber);
    output(finalNumber);
    
};
let textToType='onvert everything...';
let i=0;

function typingEffect(){
    
    if(i<textToType.length)
    {
        
        document.getElementById('title').innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
    else glowEffect();
    
}
let title=document.getElementById('title');
let phase=1;
async function glowEffect (){
    if(phase==1)
    {
        title.style.textShadow='0 0 10px white';
        phase++;
        setTimeout(glowEffect, 1500);
    }
    else  title.style.textShadow='0 0 10px transparent'; 
}

