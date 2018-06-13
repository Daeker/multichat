function showChats() {
    var channels = document.getElementsByName("channel");
    var n = channels.length;
    var namesDiv = document.createElement("div");
    namesDiv.id = "namesDiv";
    document.body.appendChild(namesDiv);
    for (var i = 0; i < n; i++) {
        prepareFrame(channels.item(i).value, 100/n);
    }
    document.getElementById("formDiv").style.display = "none";
    return false;
}

function prepareFrame(ch, w) {
    var defaultChannel = "https://www.twitch.tv/embed/CHANNEL/chat";
    var para = document.createElement("p");
    var node = document.createTextNode(ch);
    para.className = "nameClass";
    para.style.width = w+"%";
    para.appendChild(node);
    var div = document.getElementById("namesDiv");
    div.appendChild(para);
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("class", "chatClass");
    ifrm.setAttribute("src", defaultChannel.replace("CHANNEL", ch));
    ifrm.style.width = w+"%";
    document.body.appendChild(ifrm);
    return false;
}