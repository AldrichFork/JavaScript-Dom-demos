

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
    if (document.getElementById("description")) {
        var description = document.getElementById("description"),
        text=whichPic.getAttribute("title");
        description.childNodes[0].nodeValue=text;
    }
    return true;
}

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

addLoadEvent(prepareGallery);                   //将prepareGallery函数添加到队列中
