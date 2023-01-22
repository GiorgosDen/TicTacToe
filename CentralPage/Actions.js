function printInfo(){
    document.getElementById('infoPanel').style.zIndex=2;
    document.getElementById('infoPanel').style.visibility="visible";
}

function closeInfo(){
    document.getElementById('infoPanel').style.zIndex=-1;
    document.getElementById('infoPanel').style.visibility="hidden";
}