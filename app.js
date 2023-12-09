let cardsChosen = [];
const count=0;
const cardArray = [
  {
    name: "pagani",
    img: "images/pagani.png",
  },
  {
    name: "porsche",
    img: "images/porsche.png",
  },
  {
    name: "ferrari",
    img: "images/ferrari.png",
  },
  {
    name: "koenigsegg",
    img: "images/koenigsegg.png",
  },
  {
    name: "lamborghini",
    img: "images/lamborghini.png",
  },
  {
    name: "mclaren",
    img: "images/mclaren.png",
  },
  {
    name: "pagani",
    img: "images/pagani.png",
  },
  {
    name: "porsche",
    img: "images/porsche.png",
  },
  {
    name: "ferrari",
    img: "images/ferrari.png",
  },
  {
    name: "koenigsegg",
    img: "images/koenigsegg.png",
  },
  {
    name: "lamborghini",
    img: "images/lamborghini.png",
  },
  {
    name: "mclaren",
    img: "images/mclaren.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
let cardsChosenIds=[]
const cardswon=[]

function checkMatch() {
  const cards =document.querySelectorAll('img')
  const optiononeID=cardsChosenIds[0]
  const optiontwoID=cardsChosenIds[1]
  console.log(cards)
  if(optiononeID==optiontwoID){
    alert("You clikced the same card dumbass")
  }
  
  console.log("Check for match");
  if (cardsChosen[0] == cardsChosen[1]) {
    alert("you found a match !");
    cards[optiononeID].setAttribute('src','images/white.png')
    cards[optiontwoID].setAttribute('src','images/white.png')
    cards[optiontwoID].removeEventListener('click' ,flipCard)
    cards[optiononeID].removeEventListener('click' ,flipCard)
    cardswon.push(cardsChosen)
  }
  else{
    cards[optiononeID].setAttribute('src','images/blank.png')
    cards[optiontwoID].setAttribute('src','images/blank.png')
    alert('Lol wrong you')
  }
  cardsChosen=[]
  cardsChosenIds=[]
  if(cardswon.length==(cardArray.length/2)){
    alert('Congratulations you completed the game !')
  }
  
}

function flipCard() {
  console.log(cardArray);
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();
