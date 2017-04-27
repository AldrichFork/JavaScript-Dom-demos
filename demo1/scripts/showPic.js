
function showPic(whichPic) {
    var source=whichPic.getAttribute("href"),
    placeholder=document.getElementById("placeholder"),
    text=whichPic.getAttribute("title"),
    description=document.getElementById("description");
    placeholder.setAttribute("src",source);
    description.childNodes[0].nodeValue=text;
}
