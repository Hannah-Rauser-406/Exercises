/*
*Exercise Shuffling
*/

console.log("Hello World!");

// var textShuffle = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
// console.log("text shuffle is:", textShuffle);

function deckMap(deckIn){
  for (var i = 0; i < deckIn.length; i+=1) {

      var card = '';

    if(deckIn[i] <= 13){
        deckIn[i] = deckIn[i] + 'H' ;
        //console.log("My card is:", card);
    }
    else if(deckIn[i]<=26){
                //condition          if   true                or false
        deckIn[i] =(deckIn[i] % 13 !== 0) ? (deckIn[i] % 13 + 'S') : "13S";
        //console.log("I'm a Spade!", card);
    }
    else if (deckIn[i] <= 39){
        deckIn[i] =(deckIn[i] % 26 !==0) ? (deckIn[i] % 26 + 'C') : "13C";
        //console.log("I'm a Club!", card);
    }
    else if(deckIn[i]<=52){
        deckIn[i] =(deckIn[i] % 13 !==0) ? (deckIn[i] % 13 + 'D') : "13D";
        //console.log("I'm a Diamond!", card);
    }
    else{
        console.log("Too many cards!");
    }
      return deckIn;
  }

}





var tempDeck = [];
//var deck=[];
//deck.push();
//var faceCards =[];
// faceCards.push("Jack of Diamonds","Jack of Hearts", "Jack of Spades", "Jack of Clubs","Queen of Diamonds","Queen of Hearts", "Queen of Spades", "Queen of Clubs","King of Diamonds","King of Hearts", "King of Spades", "King of Clubs");
// //console.log(faceCards);
// var numberCards=[],
// numberCards.push("Ace of Diamonds","Ace of Hearts", "Ace of Spades", "Ace of Clubs","Deuce of Diamonds","Deuce of Hearts", "Deuce of Spades", "Deuce of Clubs","3 of Diamonds","3 of Hearts", "3 of Spades", "3 of Clubs","4 of Diamonds","4 of Hearts", "4 of Spades", "4 of Clubs","5 of Diamonds","5 of Hearts", "5 of Spades", "5 of Clubs","5 of Diamonds","5 of Hearts", "5 of Spades", "5 of Clubs","6 of Diamonds","6 of Hearts", "6 of Spades", "6 of Clubs","7 of Diamonds","7 of Hearts", "7 of Spades", "7 of Clubs","8 of Diamonds","8 of Hearts", "8 of Spades", "8 of Clubs","9 of Diamonds","9 of Hearts", "9 of Spades", "9 of Clubs","10 of Diamonds","10 of Hearts", "10 of Spades", "10 of Clubs");



function generateDeck(){
  for(var i=1; i<=52; i+=1){
    tempDeck.push(i);
  }
  return tempDeck;
}

var deck= generateDeck();

deck= deckMap(deck);
console.log("mapped deck:", deck);

/*console.log("My deck is:", deck);*/

function shuffle(deckIn){
  for (var j = 0; j < deckIn.length; j+=1) {
    var currentIndex= deckIn.indexOf(deckIn[j]);
    var swapIndex = deckIn.indexOf(deckIn[Math.floor(Math.random()* deckIn.length)]);

    var tempCard = deckIn[currentIndex];
    deckIn[currentIndex]=deckIn[swapIndex];
    deckIn[swapIndex]=tempCard;
  }
  /*console.log("shuffled deck", deckIn);
  console.log("shuffled deck length", deckIn.length);
  */
  //console.log("deck is", deckIn.length);
  return deckIn;
}
deck = shuffle(deck);
var checkArray = [];
deck.forEach(function(card, index){
  if(deck.indexOf(card) === index){
    checkArray.push(card);
  }
});
//console.log("check array length", checkArray.length);
