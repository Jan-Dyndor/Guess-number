'use strict';
//! Proste DOM manipulations

//najpierw trzeba zaznaczyć jaki element chcemy poprzez document.querySelector(".klasa obiektu") i to pozwala nam go zaznaczyć a potem dajemy .textcontent żeby odczytać wartość tekstową lub .value żeby odczytać wartosć input jak dam = moge zmienić te wartosci
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number! ';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 200;
// //! input element używamy value a nie texxtcontent żeby otrzymać zawartość input field
// document.querySelector('.guess').value = 23;
// console.log(
//   'Value from input któe wcześniej ustawilśmy = ' +
//     document.querySelector('.guess').value
// );

//console.log(document.querySelector('.message').textContent);

//! Definig seacret number
// nie robimy tego w event handler bo za każdym kliknięciem wtedy generował by się nowy numer a to bez sesnu

let secretNumber = Math.floor(Math.random() * 20) + 1;
//Math.random generuje liczbe od 0-1 ALE BEZ `1 , czyli maxymalnie np0.9999999... wiec nigdy nie doleci do 20 wiec dodaje do niej na koćy ( już po zaokrągleniu w dół które robi math.floor) 1ebym widział jak to działa lepiej to pokazuje zamiast ? numer wylosowany
//document.querySelector('.number').textContent = secretNumber;
//! stworzenie zmiennej prechowujacej ilosć prób po których user zgadł wynik i zmneijszanie go po każdej złej próbie i wyświetlanie... Dodatkowo należy pamiętac że takie rozwiazanie jak przetryzmywanie zmiennych w kdozie jest najlepsze ( wszystkir dane są wtedy dostępne) , mógłym to zrobić jeszcze tak ze odczytuje wartość ze socre na stronie i zmnijeszam ja o 1 i wpisuje i znó odczytuje i znów wpsiuje. ALE TO ZŁA PRAKTYKA. Po pierwsze apliakcja nie wie w żadnym punkcie jaki użytkonwik ma wynik a po drugie polegamy na DOM ( wartosć score była by "przetrzymywana właśnie tam")
let score = 20;
//
//! Variable for heighscore
let heighscore = 0;

//! Handling Click Events
//Czyli odczytanie np input jaki dał user w momencie jak kliknie button
//event - to coś co się dzieje na stronie np ruch myszką czy kliknięcie myszką lub guzika na klawiaturze, a eventLisner -za jego pomocą czekamy na jakiś konketeny event aż się wydarzy i jak sięwydarzy to coś robimy
//! 1. żeby najpier wyczekiwać eventów musimy ustalić i zaznaczyć element w którym even ma się zdarzyć - u nas button bo po jego kliknęciu chemy odczytać input

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = 'WHOO!'; przykład zmiany po wykonianiu funkcji
  //console.log(guess, typeof guess);

  //!Przypisaliśmy warotść którą wpisał użytkownik do zmiennej guess, to string ( mimo że wpisujemy liczbe) a potem chcemy poróanć te liczbe z generowaną automatycznie i sprawdzic czy user zgadł. Daltego trzeba zaminić te wartosć na liczbe
  //Najpier wprawdzamy czy jest jakaś wartośc, jak nie to program wypisuje 0 - czyli folsy value ( false). Operatotem ! zmianima z false na true i wtedy wypisze coś... (!false = true) i daltego przy pdoaniu normalnej cyfry nic się nie wypełni. np dam 9 i 9 to true wartość więc !true = fasle a jak jest falese to if tego nie wykonuje

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  //when playes wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    //!zmiana CSS jak użytkownik wygra
    //jak zawsze zaznaczamy element który nas interesuje i dodajemy style i po kropce jakieś własności. Wartość zawsze podajemy jako string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    //! Implementing heighscore
    if (score > heighscore) {
      heighscore = score;
      document.querySelector('.highscore').textContent = heighscore;
    }
  }
  //when users number it too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when users number is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// nazwą eventu jest click - czyli kliknięcie myszą, teraz musimy podać eventListner co ma zrobić , jak zareagować na kliknięcie. Podajemy tam funcion która będzie miałą kod , kotóry będize sięwykonywał jak tylko klikniemy w check button. Ta funkcja nazywa się evenhandler
//! pamiętaj że funkcja przechowuje wartość wiec możemy jąprzekazywać innej funkcji jak addEventListner jako argument. Dodatkowo zauważ że nie wywołujemy tej funkcji. JS engine jak tylko pojawi się określony event sam wywołuje te funkcjie i kod w niej zawarty

//
//! Przycisk AGAIN
// wracam z ustawieniami początkowymi

document.querySelector('.again').addEventListener('click', function () {
  //Przywracam napisanie scoren 20 oraz wracam z ustawieniem licznika prób na 20
  score = 20;
  document.querySelector('.score').textContent = score;

  //ponowne losowanie seacretNumber
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //Powrót do początkowych wiadomosci i pokazanie znaku zapytania w number
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  //Zmaina w CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  //czyszczenie input , żeby nie zostawała tam liczba
  document.querySelector('.guess').value = '';
});
