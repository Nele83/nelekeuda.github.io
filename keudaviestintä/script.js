//Luodaan Javascriptillä koodia sekä käytetään indexsissä olevia ..,  tiedostot=document.

//Luodaan käyttäjälle kysymykset, kysymysten [taulukko]
const askthis = [ //const on tyypin määrittelijä
  {question: '1/9: Innostutko helposti uusista asioista?',}, //'Pelkkää tekstiä'
  {question: '2/9: Tykkäätkö tehdä tehtäviä itsenäisesti?',},
  {question: '3/9: Oletko liikunnallinen ja tykkäätkö tehdä fyysistä työtä?',},
  {question: '4/9: Oletko oma-aloitteinen ja tykkäätkö tehdä vastuullista työtä?',},
  {question: '5/9: Pysyykö käsissäsi kaikenlaiset työkalut ja tykkäätkö luovasta työstä?',},
  {question: '6/9: Oletko puhelias?',},
  {question: '7/9: Oletko positiivinen, helposti lähestyttävä, joka tykkää tiimityöskentelystä?',},
  {question: '8/9: Siedätkö painetta?',},
  {question: '9/9: Onko sinulla hyvät vuorovaikutustaidot ja tykkäätkö erilaisista kulttuureista?',},
]


//Muuttujien esittäminen/lisääminen miten muuttujat toimii tai siis mitä ne tekee
const question = document.querySelector('.question'); /*Muuttuja on questio. document.querySelector tuo elementin('.question'):in.
                                                      Siirtyy HTML:n määrittelemään "kysymysosaan"*/
const SubmitYes = document.querySelector('#option1'); /*Muuttuja on SubmitYes. Hyväksyy"kyllä"-kuvan painamisen vastauksena.
                                                      document.querySelector tuo yhden elementin ('#option1'):in.*/
const SubmitNo = document.querySelector('#option2'); /*Muuttuja SubmitNo, hyväksyy "ei"-kuvan painamisen, sama homma kun Yes-kuva*/

const answers = document.querySelectorAll('.answer'); /*Muuttuja answers, on(Saat 1 pisteen jokaisesta oikeasta vastauksesta. Tietokilpailun lopussa
                                                       näytetään kokonaispisteesi. Maksimipistemäärä on 40 pistettä.querySelectorAll tuo kaikki vastaukset)*/ 
const result = document.querySelector('#showResult'); /*Eli se siirtää tulokset omaan lokeroon niinsanotusti. <div id="showResult" class="resultArea"></div>*/

const hideQandA = document.getElementById("tohide"); /*Piilottaa lopuksi kysymyksen ja vastaukset. Opetus video: getElementById:lle 
                                                       https://www.youtube.com/watch?v=yIzlaTMx9nU */

let points = 0; //Määritin objektin let points, pistelaskuri joka alkaa nollasta.
let count = 0; //Määritin kysymysten laskenta, joka alkaa nollasta.

//luotu toiminto, joka alkaa kysymään kysymyksiä   ()=>Vasen osa tarkoittaa funktion tuloa ja oikea osa funktion lähtöä.
const ask = () => { /*const ask,Toiminto = () => {const questionList eli const kysymysluettelo = questionList[count];eli menee siinä järjestyksessä 1:stä 9:n asti*/                                 
const questionList = askthis[count];  /*eli kysymys luku=const askthis. mitkä on kysymys taulukossa} */
question.innerText = questionList.question; /*Meillä on määritetty innerText-ominaisuus questioniksi, kaikki alisolmut 
                                            poistetaan ja korvataan vain yhdellä uudella tekstisolmulla. Sitten questionList on kysymykset.*/
}; 

ask (); //Kutsutaan funktiota ask toimintoa minkä jus luotiin
//käyttäjän vastausten tarkistus toiminto
const checkAnswer = () => { /*const checkAnswer/tarkistaVastaus,toiminto(tarkistaa mitä käyttäjä vastaa kyllä tai ei)= () => {let answer;/anna vastaus; } */
  let answer; //Muuttuja answer.   let answer;/anna vastaus; Eli joko Kyllä tai Ei
  answers.forEach(userResponse => { /*answers.forEach(answers kutsuu forEachasia) forEach suorittaa saman koodin jokaiselle taulukon elementille
                                    (UserResponse palauttaa vastauksen kehotteeseen => { */
      if (userResponse.checked){ /* if (UserResponse.checked,eli kaikki kohdat kun on tarkastettu){} */
          answer = userResponse.id; /*{answer/vastaus = userResponse.id;/} */
      }
  });
  return answer; //Palauttaa answerin/kysymyksen
};
//jatkaa kysymysten esittämistä kysymyksen jälkeen
const keepAsking = () => {/*Jatkaa ensimmäisen kysymyksen jälkeen eli siirtyy toiseen kysymykseen*/
  answers.forEach((userResponse)=>{ /*(answers kutsuu forEachasia) forEach suorittaa saman koodin jokaiselle taulukon elementille,
                                     (UserResponse palauttaa vastauksen kehotteeseen =>*/
      userResponse.checked = false; /* UserResponse palauttaa tyypin Merkkijono jos on false eli yksi piste siirtyy talteen */
  })
}
//skenaario "kyllä"-vastaukselle
SubmitYes.addEventListener('click', () => {  /*Mitä tapahtuu kun käyttäjä painaa kyllä nappia */
  const checkingAnswer = checkAnswer(); /*const tarkistaaVastaus = tarkista Vastaus */
  if (checkingAnswer == askthis[count].answer){ //Jos vastaus on sama askthis[count] mitä kysytään eli Kyllä, vastauksesta saa sillon 1pisteen
      points++; //eli, jokainen "kyllä" lisää +1
  };
  count++; //Kuinka monta kysymystä

  keepAsking(); //funktion kutsuminen const keepAsking
  if (count < askthis.length){ //Meillä on 9 kysymystä eli kysyy 9 kertaa eli kaikki kysymykset

      ask();// Kutsutaan jälleen funkitiota askia
  }
  else if (count == askthis.length) { /*Kun käyttäjä saavuttaa 9 kysymyksen */
    const hideQuestionsY = document.getElementById("option1"); //
    hideQuestionsY.onclick = function () {//Mitä tapahtuu sen jälkeen kun  on viimeiseen kysymykseen vastattu.
    hideQandA.style.display = "none"; };//style.display muuttuu näkymättömäksi
      if (hideQandA.style.display = "none") { //Kysymysten alue on näkymätön, pelkästään testin tulokset jää näkyviin
      let ala = ''; //Muuttuja on ala eli =''; mikä tahansa
      switch (points){ // Kun saa 1 pisteen
        case 1: /*1pisteen saajalle tulee lopuksi Sinua voisi kiinnostaa Puutarha-ala. Käy katsomassa lisää ammatista alhaalla olevan linkin 
                  kautta! näkyviin ja viereen jää myös Kokeile uudelleen nappi*/
          ala = 'Maatalousala';/*Muistuttaa C#:ia ..result.innerHTML menee indexsiin ja liittää <div id="showResult" class="resultArea"></div>
                               ${ala} liittää tekstin Maatalousalan*/
          result.innerHTML = `<h4>Sinua voisi kiinnostaa Maatalousala. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/maatalousalan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 2: 
          ala = 'Metsäala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/metsaalan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 3:
          ala = 'Turvallisuusala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/turvallisuusalan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 4:
          ala = 'Puhtaus-ja-kiinteistopalveluala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4>
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/puhtaus-ja-kiinteistopalvelualan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 5: 
          ala = 'Puutarha-ala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/puutarha-alan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 6:
          ala = 'Kauneudenhoitoala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/hius-ja-kauneudenhoitoalan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 7: 
          ala = 'Ravintola- ja catering ala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/ravintola-ja-catering-alan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 8: 
          ala = 'Logistiikka-ala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/logistiikan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        case 9:
          ala = 'Matkailuala';
          result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
          <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/matkailualan-perustutkinto/'">Lue ${ala}sta</button>
          <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
          break;
        }
        /* //ALKUPERÄINEN TULOSALUE  
        result.classList.remove('resultArea'); 
        result.innerHTML = `<h3>${ala}</h3> 
        <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;*/
    }
  }
});
//skenaario "ei" vastaukselle, toimii samalla tavalla kun Kyllä nappi.
SubmitNo.addEventListener('click', () => {
  count++;
  keepAsking();
  if(count < askthis.length){
      ask();
  }
  else if (count == askthis.length) { 
    const hideQuestionsN = document.getElementById("option2");//Nappi ei,eli sama kun Kyllä nappi toiminto
    hideQuestionsN.onclick = function () {
    hideQandA.style.display = "none"; };
      if (hideQandA.style.display = "none") { //testin tulokset
        let ala = '';
        switch (points){ 
          case 0:
            ala = 'Oops! Ura näkemyksesi on vielä hieman epäselvä. Suosittelemme ottamaan yhteyttä Keudan opinto-ohjaajan.';
            result.innerHTML = `<h4>${ala}</h4> 
            <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/hakijalle/opinto-ja-uraohjaus-ennen-hakeutumista/'">Lue Uraohjauksesta</button>
            <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`; 
            break;
            case 1:
              ala = 'Maatalousala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/maatalousalan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 2: 
              ala = 'Metsäala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/metsaalan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 3:
              ala = 'Turvallisuusala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/turvallisuusalan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 4:
              ala = 'Puhtaus-ja-kiinteistopalveluala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4>
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/puhtaus-ja-kiinteistopalvelualan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 5: 
              ala = 'Puutarha-ala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/puutarha-alan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 6:
              ala = 'Kauneudenhoitoala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/hius-ja-kauneudenhoitoalan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 7: 
              ala = 'Ravintola- ja catering ala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/ravintola-ja-catering-alan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
            case 8: 
              ala = 'Logistiikka-ala';
              result.innerHTML = `<h4>Sinua voisi kiinnostaa ${ala}. Käy katsomassa lisää ammatista alhaalla olevan linkin kautta!</h4> 
              <button class="linkbutton" onclick="window.location.href='https://www.keuda.fi/koulutukset/logistiikan-perustutkinto/'">Lue ${ala}sta</button>
              <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
              break;
          }
        /*result.classList.remove('resultArea'); //ALKUPERÄINEN TULOSALUE (ORIGINAL TULOS AREA)
        result.innerHTML = `<h4>${ala}</h4> 
        <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;*/
    }
  }
});