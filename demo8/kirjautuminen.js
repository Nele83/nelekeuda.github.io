document.addEventListener("DOMContentLoaded", kirjaudu);

function onkokirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display= "none";
    }
    else {
        document.getElementById("ulos kirjautuminen").compareDocumentPosition.display="none";
    }
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function kirjaudu_ulos(){
    localStorage.setItem("kirjautunut", "ei");
}
