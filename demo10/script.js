/* JavaScriptin käyttö tarjoaa pebble JS -kirjaston, jota käytetään älykellosovelluksissa. Tämä kehys toimii sovelluksissa, jotka edellyttävät
Internetiä sen toiminnalle.Tätä sivua käytetään, kun verkkosivusta tehdään dynaaminen ja lisätään erikoistehosteita sivuille, kuten rollover, 
käyttöönotto ja monentyyppiset grafiikat. Sitä käyttävät enimmäkseen kaikki verkkosivustot validointia varten. */

const progress = document.getElementById('progress');/*Muutuja progress( getElementById, sitä käytetään lähes joka kerta, kun haluat 
lukea tai muokata HTML-elementtiä.getElementById() JA document.getElementById("demo"); hakee elementin määritetyllä tunnuksella*/ 
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');/*Palauttaa kaikki valitsimia vastaavan solmun elementin jälkeläiset. Eli 
valitsee kaikki elementit, jolla on luokka'circles' */

var currentActive = 1; //Muuttuja currentActive=NykyinenAktiivinen */
next.addEventListener('click', () => { //addEventListener lisää 1 jokaiselle napsautukselle */
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1 ){
        currentActive = 1;
    }
    update();
})

function update(){
    //Update Active class in circle = Päivitä aktiivinen luokka piirissä
    circles.forEach((circle, index) => {
        if(index < currentActive){ //Jos olisi <= hyppäisi heti 1:stä 3:een eli 2 pykälällä
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    //Update the progress Bar = Päivitä edistymispalkki
    var activeCircles = document.querySelectorAll('.active');

    progress.style.width = (activeCircles.length -1) / /*-1 pysäyttää elohopeen numerokohdalle prikulleen jos ei olisi -1 juoksisi yli 
    numeron kun painaa seuraavaa*/
    (circles.length -1) * 100 + '%';

    //Change the button enabled and disabled state = Muuta painikkeen käytössä ja poissa käytöstä
    if(currentActive ===1){ //jos on 1numerolla edellinen nappi aktivoituu jotta voi klikata takaisin
        prev.disabled = true;// on tosi
    }else if(currentActive === circles.length){//ja edellinen nappi pysyy aktiivisena loppuun saakkaan 
        next.disablend = true //on tosi
    }else{
        prev.disabled = false;//edellinen nappi pois käytöstä eli ei ole aktiivinen jos olet 1numeron kohdalla??
        next.disabled = false //??
    }
}