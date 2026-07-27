/* ==========================
   NAVIGATION ENTRE LES PAGES
========================== */

function nextPage(id){

    document.querySelectorAll(".page")
    .forEach(page=>{
        page.classList.remove("active");
    });


    document.getElementById(id)
    .classList.add("active");


    if(id==="story"){
        startTyping();
    }


    if(id==="letter"){
        startLetter();
    }


    if(id==="final"){
        fireworks();
    }

}




/* ==========================
   HISTOIRE MACHINE A ECRIRE
========================== */


let storyText =
"Il était une fois un moment que je voulais créer spécialement pour toi ❤️. Un instant rempli de sourires, de souvenirs et de bonheur...";


let storyIndex=0;


function startTyping(){


let box=document.getElementById("typing");


if(storyIndex===0){
    box.innerHTML="";
}


function write(){


    if(storyIndex < storyText.length){

        box.innerHTML += storyText[storyIndex];

        storyIndex++;

        setTimeout(write,45);

    }

}


write();

}




/* ==========================
   QUESTION OUI / NON
========================== */


let yes=document.getElementById("yes");
let no=document.getElementById("no");


yes.onclick=function(){

    nextPage("planning");

    hearts();

};



no.onmouseover=function(){


    no.style.position="absolute";


    no.style.left=
    Math.random()*70+"%";


    no.style.top=
    Math.random()*70+"%";


    yes.style.transform=
    "scale(1.4)";


};




/* ==========================
   PLUIE DE COEURS
========================== */


function hearts(){


setInterval(()=>{


let heart=document.createElement("div");


heart.className="heart";


let emojis=[
"❤️",
"💖",
"💕",
"✨"
];


heart.innerHTML=
emojis[
Math.floor(Math.random()*emojis.length)
];


heart.style.left=
Math.random()*100+"vw";


heart.style.fontSize=
20+Math.random()*30+"px";


heart.style.animationDuration=
3+Math.random()*4+"s";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},7000);



},250);



}




/* ==========================
   COMPTE A REBOURS
========================== */


let dateDate=new Date();


dateDate.setDate(
dateDate.getDate()+7
);



function timer(){


let now=new Date();


let diff=dateDate-now;



if(diff<=0){

document.getElementById("timer")
.innerHTML=
"C'est maintenant ❤️";

return;

}



let jours=Math.floor(
diff/(1000*60*60*24)
);


let heures=Math.floor(
(diff/(1000*60*60))%24
);


let minutes=Math.floor(
(diff/(1000*60))%60
);


let secondes=Math.floor(
(diff/1000)%60
);



document.getElementById("timer")
.innerHTML=
jours+"j "
+heures+"h "
+minutes+"m "
+secondes+"s";


}


setInterval(timer,1000);




/* ==========================
   LETTRE ANIMEE
========================== */


let letter=

"Je voulais simplement te dire que ce moment compte beaucoup pour moi ❤️. J'espère créer avec toi de beaux souvenirs et partager un instant que l'on n'oubliera jamais 😍";


let letterIndex=0;



function startLetter(){


let box=document.getElementById("letterText");


box.innerHTML="";

letterIndex=0;



function write(){


if(letterIndex<letter.length){


box.innerHTML+=letter[letterIndex];


letterIndex++;


setTimeout(write,50);



}



}



write();


}




/* ==========================
   FEUX D'ARTIFICE FINAL
========================== */


function fireworks(){


for(let i=0;i<100;i++){


let spark=document.createElement("div");


spark.innerHTML="✨";


spark.style.position="fixed";
spark.style.left="50%";
spark.style.top="50%";


spark.style.fontSize=
10+Math.random()*35+"px";


document.body.appendChild(spark);



let x=
(Math.random()-0.5)*700;


let y=
(Math.random()-0.5)*700;



spark.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:
`translate(${x}px,${y}px)`,
opacity:0
}

],{


duration:1500,


easing:"ease-out"

});



setTimeout(()=>{

spark.remove();

},1600);



}



}




/* ==========================
   LANCEMENT AUTOMATIQUE
========================== */

timer();