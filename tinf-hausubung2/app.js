function copy(val) {
    getCopyValue(val);
}

function getCopyValue(val) {
    var copyText = document.getElementById(val).innerText;
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = copyText;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert("Kopiert!")
}