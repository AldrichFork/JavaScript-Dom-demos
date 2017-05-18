
function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem=document.getElementById("message");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="100px";
    moveElement("message",125,25,20);
    if (!document.getElementById("message2")) return false;
    var elem=document.getElementById("message2");
    elem.style.position="absolute";
    elem.style.left="50px";
    elem.style.top="50px";
    moveElement("message2",200,500,10);
}
/*
function moveMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem=document.getElementById("message"),
        xpos=parseInt(elem.style.left),
        ypos=parseInt(elem.style.top);
    if(xpos==200&&ypos==100){
        return true;
    }
    if(xpos<200){
        xpos++;
    }
    if(xpos>200){
        xpos--;
    }
    if(ypos<100){
        ypos++;
    }
    if(ypos>100){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    movement=setTimeout("moveMessage()",10);
}
*/

function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem=document.getElementById(elementID),
        xpos=parseInt(elem.style.left),
        ypos=parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y){
        return true;
    }
    if(xpos<final_x){
        xpos++;
    }
    if(xpos>final_x){
        xpos--;
    }
    if(ypos<final_y){
        ypos++;
    }
    if(ypos>final_y){
        ypos--;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement=setTimeout(repeat,interval);
}



addLoadEvent(positionMessage);