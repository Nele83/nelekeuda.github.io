//creating the list of questions that will be asked from a user
const askthis = [ //KYSYMYKSET = GOOGLE-TRANSLATE !
  {question: '1: Tykkäätkö oppia uusia asioita?',},
  {question: '2: Tykkäätkö tehdä tehtäviä itsenäisesti?',},
  {question: '3: Onko sinulla mahdollisuutta saada motivaatiota pysyä hyvässä fyysisessä kunnossa?',},
  {question: '4: Pidätkö asioiden pitämisestä järjestyksessä?',},
  {question: '5: Voitko kuvailla itseäsi luovaksi?',},
  {question: '6: Pidätkö ihmisten kanssa vuorovaikutuksesta?',},
  {question: '7: Kuulostaako tiimityö sinusta hyvältä?',},
  {question: '8: Onko stressinhallintasi tarpeeksi hyvä?',},
  {question: '9: Olisitko kiinnostunut olemaan vuorovaikutuksessa asiakkaiden kanssa eri kielellä?',},
]
//creating variables
const question = document.querySelector('.question'); //goes to 'question section' defined by HTML
const SubmitYes = document.querySelector('#option1'); //accepts pressing the "yes" picture as an answer
const SubmitNo = document.querySelector('#option2'); //accepts pressing the "no" pic
const answers = document.querySelectorAll('.answer'); 
const result = document.querySelector('#showResult'); //to add the result area
const hideQandA = document.getElementById("tohide"); //added to hide question and qnswers <span> after the test
let points = 0; //simple logic to see if it works
let count = 0; //questions count
//creates a function that start asking questions
const ask = () => {
 const questionList = askthis[count];
 question.innerText = questionList.question;
}; 
ask ();
//user response check
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
          ala = 'Maatalousala https://www.keuda.fi/koulutukset/maatalousalan-perustutkinto/';
          break;
        case 2: 
          ala = 'Metsäala https://www.keuda.fi/koulutukset/metsaalan-perustutkinto/';
          break;
        case 3:
          ala = 'Turvallisuusala https://www.keuda.fi/koulutukset/turvallisuusalan-perustutkinto/';
          break;
        case 4:
          ala = 'Puhtaus-ja-kiinteistopalveluala https://www.keuda.fi/koulutukset/puhtaus-ja-kiinteistopalvelualan-perustutkinto/';
          break;
        case 5: 
          ala = 'Puutarha-ala https://www.keuda.fi/koulutukset/puutarha-alan-perustutkinto/';
          break;
        case 6:
          ala = 'Kauneudenhoitoala https://www.keuda.fi/koulutukset/hius-ja-kauneudenhoitoalan-perustutkinto/';
          break;
        case 7: 
          ala = 'Ravintola- ja catering ala https://www.keuda.fi/koulutukset/ravintola-ja-catering-alan-perustutkinto/';
          break;
        case 8: 
          ala = 'Logistikka https://www.keuda.fi/koulutukset/logistiikan-perustutkinto/';
          break;
        case 9:
          ala = 'Matkailuala https://www.keuda.fi/koulutukset/matkailualan-perustutkinto/';
          break;
        }
        result.classList.remove('resultArea'); 
        result.innerHTML = `<h4>${ala}</h4> 
        <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
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
            ala = 'Maatalousala https://www.keuda.fi/koulutukset/maatalousalan-perustutkinto/'
            break;
          case 2: 
            ala = 'Metsäala https://www.keuda.fi/koulutukset/metsaalan-perustutkinto/';
            break;
          case 3:
            ala = 'Turvallisuusala https://www.keuda.fi/koulutukset/turvallisuusalan-perustutkinto/';
            break;
          case 4:
            ala = 'Puhtaus-ja-kiinteistopalveluala https://www.keuda.fi/koulutukset/puhtaus-ja-kiinteistopalvelualan-perustutkinto/';
            break;
          case 5: 
            ala = 'Puutarha-ala https://www.keuda.fi/koulutukset/puutarha-alan-perustutkinto/';
            break;
          case 6:
            ala = 'Kauneudenhoitoala https://www.keuda.fi/koulutukset/hius-ja-kauneudenhoitoalan-perustutkinto/';
            break;
          case 7: 
            ala = 'Ravintola- ja catering ala https://www.keuda.fi/koulutukset/ravintola-ja-catering-alan-perustutkinto/';
            break;
          case 8: 
            ala = 'Logistikka https://www.keuda.fi/koulutukset/logistiikan-perustutkinto/';
            break;
          case 9:
            ala = 'Matkailuala https://www.keuda.fi/koulutukset/matkailualan-perustutkinto/';
            break;
          }
        result.classList.remove('resultArea'); 
        result.innerHTML = `<h4>${ala}</h4> 
        <button class="tryAgainButton" onclick='location.reload()'>Kokeile uudelleen</button>`;
    }
  }
});

