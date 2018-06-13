function addInput() {
    var inptDiv = document.getElementById("inptDiv");
    var inpt = document.createElement("input");
    inpt.type = "text";
    inpt.name = "channel";
    inpt.placeholder = "Channel Name";
    inptDiv.appendChild(inpt);
    inptDiv.appendChild(document.createElement("br"));
    return false;
}

function remInput() {
    var inptDiv = document.getElementById("inptDiv");
    if (inptDiv.childElementCount > 2) {
      inptDiv.removeChild(inptDiv.lastChild);
      inptDiv.removeChild(inptDiv.lastChild);
    }
    return false;
}