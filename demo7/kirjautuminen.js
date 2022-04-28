document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = 'kylla';
    if(kirjautunut === 'kylla'){
        document.getElementById('tervetuloa_teksti').textContent += localStorage.getItem("Nele");
    }
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
}