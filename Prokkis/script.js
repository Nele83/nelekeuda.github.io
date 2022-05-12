//luettelon kysymykset, jotka käyttäjältä kysytään
const askthis = [ 
  {question: '1: Innostutko helposti uusista asioista?',},
  {question: '2: Tykkäätkö tehdä tehtäviä itsenäisesti?',},
  {question: '3: Oletko liikunnallinen ja tykkäätkö tehdä fyysistä työtä?',},
  {question: '4: Oletko oma-aloitteinen ja tykkäätkö tehdä vastuullista työtä?',},
  {question: '5: Pysyykö käsissäsi kaikenlaiset työkalut ja tykkäätkö luovasta työstä?',},
  {question: '6: Oletko puhelias?',},
  {question: '7: Oletko positiivinen, helposti lähestyttävä, joka tykkää tiimityöskentelystä?',},
  {question: '8: Siedätkö painetta?',},
  {question: '9: Onko sinulla hyvät vuorovaikutustaidot ja tykkäätkö erilaisista kulttuureista?',},
]
//muuttujien luominen
const question = document.querySelector('.question'); /*siirtyy HTML:n määrittelemään "kysymysosaan". (menetelmä) ParentNode.querySelector<Element>(valitsimet: merkkijono): Elementti (+2 ylikuormitusta)
Palauttaa ensimmäisen elementin, joka on valitsimia vastaavan solmun jälkeläinen.*/
const SubmitYes = document.querySelector('#option1'); //hyväksyy "kyllä"-kuvan painamisen vastauksena
const SubmitNo = document.querySelector('#option2'); //hyväksyy "ei"-kuvan painamisen

const answers = document.querySelectorAll('.answer'); 

const result = document.querySelector('#showResult'); //lisätäksesi tulosalueen
const hideQandA = document.getElementById("tohide"); //lisätty piilottamaan kysymyksen ja qnswers <span> testin jälkeen

let points = 0; //yksinkertainen logiikka nähdäksesi toimiiko se
let count = 0; //kysymykset lasketaan

//luo toiminnon, joka alkaa kysyä kysymyksiä
const ask = () => {
 const questionList = askthis[count];
 question.innerText = questionList.question;
}; 
ask ();
//käyttäjän vastausten tarkistus
const checkAnswer = () => {
  let answer;
  answers.forEach(userResponse => {
      if (userResponse.checked){
          answer = userResponse.id;
      }
  });
  return answer;
};
//continues asking questions 
const keepAsking = () => {
  answers.forEach((userResponse)=>{
      userResponse.checked = false; 
  })
}
//scenario for "yes" answer
SubmitYes.addEventListener('click', () => {
  const checkingAnswer = checkAnswer();
  if (checkingAnswer == askthis[count].answer){
      points++; //every "yes" answer adds +1
  };
  count++;
  keepAsking();
  if (count < askthis.length){
      ask();
  }
  else if (count == askthis.length) { 
    const hideQuestionsY = document.getElementById("option1");
    hideQuestionsY.onclick = function () {
    hideQandA.style.display = "none"; };
      if (hideQandA.style.display = "none") { //result tests
      let ala = '';
      switch (points){ //links to be made nice
        case 0:
          ala = 'Person that doesn\'t like anything ? '; //add some ala  
          break;
        case 1:
          ala = <p>"Käythän tutustumassa linkkiin" <a target= "_blank" href= "https://www.keuda.fi/koulutukset/maatalousalan-perustutkinto/"> Tässä on linkki www.keuda.fi </a>jota voit seurata </p>
          break;
        case 2: 
          ala = <a href = "https://www.keuda.fi/koulutukset/metsaalan-perustutkinto/"target="_blank"> Metsäala </a>
          break;
        case 3:
          ala = <a href = "https://www.keuda.fi/koulutukset/turvallisuusalan-perustutkinto/"target="_blank"> Turvallisuusala </a>
          break;
        case 4:
          ala = <a href = "https://www.keuda.fi/koulutukset/puhtaus-ja-kiinteistopalvelualan-perustutkinto/"target="_blank"> Puhtaus-ja-kiinteistopalveluala </a>
          break;
        case 5: 
          ala = <a href = "https://www.keuda.fi/koulutukset/puutarha-alan-perustutkinto/"target="_blank"> Puutarha-ala </a>
          break;
        case 6:
          ala = <a href =  "https://www.keuda.fi/koulutukset/hius-ja-kauneudenhoitoalan-perustutkinto/"target="_blank"> Kauneudenhoitoala </a>
          break;
        case 7: 
          ala = <a href =  "https://www.keuda.fi/koulutukset/ravintola-ja-catering-alan-perustutkinto/"target="_blank"> Ravintola- ja catering ala </a>
          break;
        case 8: 
          ala = <a href = "https://www.keuda.fi/koulutukset/logistiikan-perustutkinto/"target="_blank"> Logistikka </a>
          break;
        case 9:
          ala = <a href = "https://www.keuda.fi/koulutukset/matkailualan-perustutkinto/"target="_blank"> Matkailuala </a>
          break;
        }
        result.classList.remove('resultArea'); 
        result.innerHTML = `<h4>${ala}</h4> 
        <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
        <button class="tryAgainButton" onclick='location.reload()'>Testin tulos</button>;
    }
  }
});
//scenario for "no" answer
SubmitNo.addEventListener('click', () => {
  /*const checkingAnswer = checkAnswer(); //changing logic : negative answers don't decrement 
  if (checkingAnswer == askthis[count].answer){
      points--; //every "no" answer adds -1
  };*/
  count++;
  keepAsking();
  if(count < askthis.length){
      ask();
  }
  else if (count == askthis.length) { 
    const hideQuestionsN = document.getElementById("option2");
    hideQuestionsN.onclick = function () {
    hideQandA.style.display = "none"; };
      if (hideQandA.style.display = "none") { //result tests
        let ala = '';
        switch (points){ //links to be made nice
          case 0:
            ala = 'Person that doesn\'t like anything ? '; //add some ala 
            break;
          case 1:
            ala = <a href = "https://www.keuda.fi/koulutukset/maatalousalan-perustutkinto/"target="_blank"> Maatalousala </a>
            break;
          case 2: 
            ala = <a href = "https://www.keuda.fi/koulutukset/metsaalan-perustutkinto/"target="_blank"> Metsäala </a>
            break;
          case 3:
            ala = <a href = "https://www.keuda.fi/koulutukset/turvallisuusalan-perustutkinto/"target="_blank"> Turvallisuusala </a>
            break;
          case 4:
            ala = <a href = "https://www.keuda.fi/koulutukset/puhtaus-ja-kiinteistopalvelualan-perustutkinto/"target="_blank"> Puhtaus-ja-kiinteistopalveluala </a>
            break;
          case 5: 
            ala = <a href = "https://www.keuda.fi/koulutukset/puutarha-alan-perustutkinto/"target="_blank"> Puutarha-ala </a>
            break;
          case 6:
            ala = <a href =  "https://www.keuda.fi/koulutukset/hius-ja-kauneudenhoitoalan-perustutkinto/"target="_blank"> Kauneudenhoitoala </a>
            break;
          case 7: 
            ala = <a href =  "https://www.keuda.fi/koulutukset/ravintola-ja-catering-alan-perustutkinto/"target="_blank"> Ravintola- ja catering ala </a>
            break;
          case 8: 
            ala = <a href = "https://www.keuda.fi/koulutukset/logistiikan-perustutkinto/"target="_blank"> Logistikka </a>
            break;
          case 9:
            ala = <a href = "https://www.keuda.fi/koulutukset/matkailualan-perustutkinto/"target="_blank"> Matkailuala </a>
            break;
          }
        result.classList.remove('resultArea'); 
        result.innerHTML = `<h4>${ala}</h4> 
        <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
    }
  }
});