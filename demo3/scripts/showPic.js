
/**************共享onload事件***************/
function addLoadEvent(func) {
    var oldload=window.onload;                  //将现有onload事件存入变量oldload
    if (typeof window.onload !='function') {    //如果在这个处理函数上还没有绑定任何函数
        window.onload=func;                     //把新函数添加给它
    }else{
        window.onload=function () {             //如果已经绑定了一些函数，就把新函数追加到现有指令的末尾
            oldload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if (parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextElementSibling);
    }
}

function preparePlcaeholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("gallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","http://wx3.sinaimg.cn/bmiddle/006yWssMly1ff17iehpfnj31kw0w0wg8.jpg")
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose a image.");
    description.appendChild(desctext);
    var gallery=document.getElementById("gallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery() {
    if(!document.getElementById) return false;              //检查浏览器是否理解通过ID获取元素的DOM方法
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("gallery")) return false;
    var gallery=document.getElementById("gallery"),
        links=gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++) {
        links[i].onclick=function(){
        return !showPic(this);                              //由showPic来决定是否新打开一个页面
        }
    }
}

function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;
    var source=whichPic.getAttribute("href"),
        placeholder=document.getElementById("placeholder");
        placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    if (whichPic.getAttribute("title")) {
        var text = whichPic.getAttribute("title");
    }else {
        var text="";
    }
    var description=document.getElementById("description");
    if (description.firstChild.nodeType==3) {
        description.childNodes[0].nodeValue = text;
    }
    return true;
}


addLoadEvent(prepareGallery);                   //将prepareGallery函数添加到队列中
addLoadEvent(preparePlcaeholder);

