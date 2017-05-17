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