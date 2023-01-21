

function encriptar() {

    var textuser = document.getElementById("usertxt").value.toLowerCase();

    var textcoded = textuser.replace(/e/igm,"enter");
    var textcoded = textcoded.replace(/o/igm,"ober");
    var textcoded = textcoded.replace(/i/igm,"imes");
    var textcoded = textcoded.replace(/a/igm,"ai");
    var textcoded = textcoded.replace(/u/igm,"ufat");

    document.getElementById("txtencriptado").innerHTML = textcoded;

}

function desencriptar() {

    var textuser = document.getElementById("usertxt").value.toLowerCase();

    var textcoded = textuser.replace(/enter/igm,"e");
    var textcoded = textcoded.replace(/ober/igm,"o");
    var textcoded = textcoded.replace(/imes/igm,"i");
    var textcoded = textcoded.replace(/ai/igm,"a");
    var textcoded = textcoded.replace(/ufat/igm,"u");

    document.getElementById("txtencriptado").innerHTML = textcoded;


}

function copy() {
    var copiartxt = document.querySelector("#txtencriptado");
    copiartxt.select();
    document.execCommand("copy", false,);
    alert("¡Hecho!");
}