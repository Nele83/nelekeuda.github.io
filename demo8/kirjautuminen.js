document.addEventListener("DOMContentLoaded", onkokirjautunut);

function onkokirjautunut(){
 if (localStorage.getItem("kirjautunut") === 'kylla'){
     document.getElementById('tervetulo_teksti').textContent += localStorage.getItem("nimi");
     document.getElementById("kirjautumis_lomake").style.display = "none";
 }
else {
    document.getElementById("ulos_kirjautuminen").style.display = "none";
}
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}
function kirjaudu_ulos() {
    localStorage.setItem("kirjautunut", "ei");
}