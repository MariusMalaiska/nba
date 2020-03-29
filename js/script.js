// JavaScript kodas

/* UŽDUOTIS: Reikės sukurti filtravimo (paieškos) aplikaciją,
 *  kurioje vartotojas galės pasirinkti vieną iš
 *  pastarūjų 20 metų NBA (krepšinio lygos)
 *  sezonų t.y. nuo 2000 metų iki 2019 metų ir
 *  išsifiltruoti informaciją t.y. kas atitinkamą sezoną:
 *  1) tapo NBA lygos čempionais (champion);
 *  2) tapo NBA lygos vicečempionais (runnerUp);
 *  3) laimėjo finalo serijos naudingaiuso žaidėjo apdovanojimą (finalsMVP)
 *  4) laimėjo reguliaraus sezono naudingiauso žaidėjo apdovanojimą (mvp)
 *
 *  Informaija apie atitinakmą sezoną bus talpinama masyve nbaSeasons.
 *  Informacija, kuri bus atvaiduojama turės būti imama iš masyvo nbaSeasons
 *  Vartojas galės atlikti paiešką šiais būdais:
 *       - Pasirinkti metus (naudokite <select> HTML tagą)
 *       - Pasirinkti norimą informaciją paslausdamas mygtuką (pvz. "Tapo čempionais")
 *       - Informacija turės būti pateikima su tekstu ir nuotrauka (pvz. žaidėjo nuotrauka
 *       ar komandos nuotrauka su trofėjumi).
 */

// Pastarūjų 20 metų NBA sezono svarbiausia informacija (iš čia reikės imti informaciją)
const nbaSeasons = [
  {
    year: 2000,
    champion: "Los Angeles Lakers",
    runnerUp: "Indiana Pacers",
    finalsMVP: "Shaquille O'Neal",
    mvp: "Shaquille O'Neal"
  },
  {
    year: 2001,
    champion: "Los Angeles Lakers",
    runnerUp: "Philadelphia 76ers",
    finalsMVP: "Shaquille O'Neal",
    mvp: "Allen Iverson"
  },
  {
    year: 2002,
    champion: "Los Angeles Lakers",
    runnerUp: "New Jersey Nets",
    finalsMVP: "Shaquille O'Neal",
    mvp: "Tim Duncan"
  },
  {
    year: 2003,
    champion: "San Antonio Spurs",
    runnerUp: "New Jersey Nets",
    finalsMVP: "Tim Duncan",
    mvp: "Tim Duncan"
  },
  {
    year: 2004,
    champion: "Detroit Pistons",
    runnerUp: "Los Angeles Lakers",
    finalsMVP: "Chauncey Billups",
    mvp: "Kevin Garnett"
  },
  {
    year: 2005,
    champion: "San Antonio Spurs",
    runnerUp: "Detroit Pistons",
    finalsMVP: "Tim Duncan",
    mvp: "Steve Nash"
  },
  {
    year: 2006,
    champion: "	Miami Heat",
    runnerUp: "Dallas Mavericks",
    finalsMVP: "Dwyane Wade",
    mvp: "Steve Nash"
  },
  {
    year: 2007,
    champion: "San Antonio Spurs",
    runnerUp: "Cleveland Cavaliers",
    finalsMVP: "Tony Parker",
    mvp: "Dirk Nowitzki"
  },
  {
    year: 2008,
    champion: "Boston Celtics",
    runnerUp: "Los Angeles Lakers",
    finalsMVP: "Paul Pierce",
    mvp: "Kobe Bryant"
  },
  {
    year: 2009,
    champion: "Los Angeles Lakers",
    runnerUp: "Orlando Magic",
    finalsMVP: "Kobe Bryant",
    mvp: "LeBron James"
  },
  {
    year: 2010,
    champion: "Los Angeles Lakers",
    runnerUp: "Boston Celtics",
    finalsMVP: "Kobe Bryant",
    mvp: "LeBron James"
  },
  {
    year: 2011,
    champion: "Dallas Mavericks",
    runnerUp: "Miami Heat",
    finalsMVP: "Dirk Nowitzki",
    mvp: "Derrick Rose"
  },
  {
    year: 2012,
    champion: "Miami Heat",
    runnerUp: "Oklahoma City Thunder",
    finalsMVP: "LeBron James",
    mvp: "LeBron James"
  },
  {
    year: 2013,
    champion: "Miami Heat",
    runnerUp: "San Antonio Spurs",
    finalsMVP: "LeBron James",
    mvp: "LeBron James"
  },
  {
    year: 2014,
    champion: "San Antonio Spurs",
    runnerUp: "Miami Heat",
    finalsMVP: "Kawhi Leonard",
    mvp: "Kevin Durant"
  },
  {
    year: 2015,
    champion: "Golden State Warriors",
    runnerUp: "Cleveland Cavaliers",
    finalsMVP: "Andre Iguodala",
    mvp: "Stephen Curry"
  },
  {
    year: 2016,
    champion: "Cleveland Cavaliers",
    runnerUp: "Golden State Warriors",
    finalsMVP: "LeBron James",
    mvp: "Stephen Curry"
  },
  {
    year: 2017,
    champion: "Golden State Warriors",
    runnerUp: "Cleveland Cavaliers",
    finalsMVP: "Kevin Durant",
    mvp: "Russell Westbrook"
  },
  {
    year: 2018,
    champion: "Golden State Warriors",
    runnerUp: "Cleveland Cavaliers",
    finalsMVP: "Kevin Durant",
    mvp: "James Harden"
  },
  {
    year: 2019,
    champion: "Toronto Raptors",
    runnerUp: "Golden State Warriors",
    finalsMVP: "Kawhi Leonard",
    mvp: "Giannis Antetokounmpo"
  }
];
// -----------------------------Variables---------------------------------------
let year = document.querySelector(".year");
let form = document.querySelector("#form");
let infoimg = document.querySelector(".info__img");
let text = document.querySelector(".text");
let headline = document.querySelector(".headline");
let info = document.querySelector(".info");

// -----------------------------ON--submit---------------------------------------
form.addEventListener("submit", e => {
  e.preventDefault();
  let SelectedYear = document.querySelector("#selectYear");
  let selectedChamp = document.querySelector("#selectChamp");
  let selectedMVP = document.querySelector("#selectMVP");

  let campOrRunnerup = "";
  let finalsOrMvp = "";

  info.style.backgroundImage = "unset";
  headline.innerHTML = "";
  text.innerHTML = "";
  // -----------------------------index---------------------------------------

  let index = nbaSeasons.findIndex(function(a, index) {
    return a.year == SelectedYear.value;
  });
  // -----------------------------Year------------------------------------

  if (SelectedYear.value != "nul") {
    let Yearheadline = document.createTextNode(`NBA ${SelectedYear.value}`);
    headline.appendChild(Yearheadline);
  }

  // -----------------------------Champion---------------------------------------
  if (selectedChamp.value === "champion") {
    campOrRunnerup = "champion";
    let championtxt = document.createTextNode(
      `${SelectedYear.value} champion was ${nbaSeasons[index][campOrRunnerup]},`
    );
    text.appendChild(championtxt);
  } else {
    campOrRunnerup = "runnerUp";
    let runnerUptxt = document.createTextNode(
      `${SelectedYear.value} runner Up was ${nbaSeasons[index][campOrRunnerup]},`
    );
    text.appendChild(runnerUptxt);
  }
  // -----------------------------MVP---------------------------------------
  if (selectedMVP.value === "finalsMVP") {
    finalsOrMvp = "finalsMVP";
    let finalsOrMvptxt = document.createTextNode(
      ` and finals MVP was ${nbaSeasons[index][finalsOrMvp]}.`
    );
    text.appendChild(finalsOrMvptxt);
  } else {
    finalsOrMvp = "mvp";
    let Mvptxt = document.createTextNode(
      ` and most valuable person was ${nbaSeasons[index][finalsOrMvp]}.`
    );
    text.appendChild(Mvptxt);
  }
  // ------------------------------------------------------------------------
  console.log(SelectedYear.value);
  console.log(nbaSeasons[index][finalsOrMvp]);
  console.log(nbaSeasons[index][campOrRunnerup]);
  infoimg.style.backgroundImage = `url(../assets/${SelectedYear.value}.jpg)`;
});
// --------------------------------Yea Options---------------------------------
nbaSeasons.forEach(option => year.add(new Option(option.year)));
