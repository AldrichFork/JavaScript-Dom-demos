
function displayAbbreviations() {
    /********************检查浏览器兼容性********************/
    if (!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;
    /*********************取得所有缩略词******************/
    var abbr=document.getElementsByTagName("abbr");
    /********************遍历所有缩略词******************/
    if (abbr.length<1) return false;
    var defs=[];
    for (var i=0;i<abbr.length;i++){
        var definition=abbr[i].getAttribute("title"),
            key=abbr[i].lastChild.nodeValue;
        defs[key]=definition;
    }
    /*******************创建自定义列表****************/
    var dlist=document.createElement("dl");
    for (key in defs) {
        var definition=defs[key],
            dtitle=document.createElement("dt"),
            ddesc=document.createElement("dd"),
            dtitle_text=document.createTextNode(key),
            ddesc_text=document.createTextNode(definition);
        dtitle.appendChild(dtitle_text);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    /*****************创建标题*******************/
    var header=document.createElement("h2"),
        header_text=document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    /******************添加标题和自定义列表到<body>********************/
    var body=document.getElementsByTagName("body")[0];
    body.appendChild(header);
    body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);


