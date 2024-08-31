 // getElementById  

 var heading=document.getElementById('head1'); 

 heading.style.color='red'; 

 heading.style.backgroundColor='blue'; 

 heading.style.fontFamily='cursive'; 

 heading.style.borderBlockstyle='red solid'; 

 
 

 //scrpit manipulation  in <p> tag 

 var para=document.getElementById('para'); 

 //two ways method 1 

 para.innerText='Its all about DOM';  

 // changing the html elements her used the back tick 

 para.innerHTML=`<b> I am bold </b>`; 

 
 

 //getElementByClassName 

var listitem=document.getElementsByClassName('lists'); 

// listitem.style.backgroundColor='yellow'; ::this will not work ~_~ 

// console.log(listitem) 

listitem[0].style.backgroundColor='yellow'; 

 
 

//getElementbyTagName 

var h2tag=document.getElementsByTagName('h2'); 

h2tag[0].style.backgroundColor='blue' 

h2tag[1].style.fontFamily='cursive' 

 
 

//queryselector 

var p1=document.querySelector('#para'); 

p1.innerText='i am using query selector' 

 
 

//input text 

var text=document.querySelector('input'); 

text.value='send'; 

text.style.backgroundColor="green"; 

 
 

//seletive style kodukkan 

var sec_item=document.querySelector('.lists:nth-child(2)'); 

sec_item.style.color='orangered'; 

 
 

//events 

//onclick 

function show(){ 

    alert('submitted'); 

} 

//mouse over event 

function scrollchang(){ 

    var p2= document.getElementById('para'); 

    p2.style.color='red'; 

} 

//on mouse leave 

function scrollchan(){ 

    var p3= document.getElementById('para'); 

    p3.style.color='blue'; 

} 

//keyboard events 

 function keyboarde(event){ 

     console.log(event.target.value); 

 
 

 } 

// function keyboardev(event){ 

//     console.log(event.target.value); 

 
 

// } 

var keyp=document.getElementById('txtf') 

    keyp.addEventListener('keypress',function keyboarde(event) 

{ 

        console.log(event.target.value) 

     }) 

 
 
 
 
 

 