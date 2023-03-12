

function printInfo(){
    document.getElementById('infoPanel').style.animationName= "showMenu";
    document.getElementById('menu').style.animationDuration="1s"; 
    document.getElementById('menu').style.animationName="closeMenu";
}

function closeInfo(){
    document.getElementById('infoPanel').style.animationName= "closeMenu";  
    document.getElementById('menu').style.animationDuration="3s";   
    document.getElementById('menu').style.animationName="showMenu";
}

function markButton(b){
    document.getElementById(b).style.backgroundColor="rgb(205,133,63)";
}

function normalButton(b){
    document.getElementById(b).style.backgroundColor = "rgb(155, 125, 95)";
}

