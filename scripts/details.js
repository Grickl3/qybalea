
const testJSconnection = function() {
	console.log("detailsJS connected.");
};

// DECKS

	// BASIC SETS

		// ASSETS

			const blueCircle = document.createElement("img");
				blueCircle.setAttribute('src','../img/blue-circle.svg');

			// const redSquare = document.createElement("img");
				// redSquare.setAttribute('src','./img/red-square.svg');

		// LEVEL 11 — NUMERALS AND WORDS 1

			const level0 = [ "1", "2", "1", "2", "1", "2", "1", "2"];
			const level1 = ["1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3", "1", "2", "3",];
			const level2 = [ "1", "2", "3", "4", "one", "two", "three", "four"];
			const level3 = ["dog", "cat", "dog", "cat", "dog", "cat","dog", "cat"];
			const level4 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"];
			const level5 = ["dog", "cat", "dog", "cat", "dog", "cat","dog", "cat", "1", "2", "3", "4", "one", "two", "three", "four"];
			const level6 = ["4 legs", "dog", "1", "2", "3","one", "two", "three", "walk", "amble", "0", "zero"];
			const level7 = ["seven", "7", "4 legs", "dog", "1", "2", "3","one", "two", "three", "walk", "amble", "0", "zero", "four", "five", "4", "5", "six", "6"];
			const level8 = ["seven", "7", "4 legs", "dog", "1", "2", "3","one", "two", "three", "walk", "amble", "0", "zero", "four", "five", "4", "5", "six", "6", "red", "red", "blue", "blue"];
			const level9 = ["seven", "7", "4 legs", "dog", "1", "2", "3","one", "two", "three", "walk", "amble", "0", "zero", "four", "five", "4", "5", "six", "6", "red", "red", "blue", "blue"];
			const level10 = ["seven", "7", "4 legs", "dog", "1", "2", "3","one", "two", "three", "walk", "amble", "0", "zero", "four", "five", "4", "5", "six", "6", "red", "red", "blue", "blue"];
			// const level11 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level12 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level13 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level14 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level15 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level16 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level17 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level18 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level19 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]
			// const level20 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]

			const levels = [level0, level1, level2, level3,level4, level5, level6, level7, level8, level9, level10];

// WRITE DECK MARKUP

	let activeDeck = [];
	let shuffledDeck = [];

	let markUpDeck = function(deck) {
		for (var i = deck.length - 1; i >= 0; i--) {
			let card = document.createElement("div");
			card.classList.add("details__card");
			let content = document.createElement("span");
			content.innerHTML = deck[i];
			content.classList.add("details__card-copy");
			content.classList.add("layout__hidden");
			card.appendChild(content);

			card.addEventListener("click", function() {
				content.classList.toggle("layout__hidden");
			});
			
			activeDeck.push(card);
		}
	}

	let fillBox = function(deck, box) {
		
		activeDeck = [];
		shuffledDeck = [];
		markUpDeck(deck);
		shuffledDeck = activeDeck.sort(() => Math.random() - 0.5)

		while (box.firstChild) {
        	box.removeChild(box.firstChild);
    	}

		for (var i = 0; i < shuffledDeck.length; i++) {
			box.appendChild(shuffledDeck[i]);
		}

		// console.log(shuffledDeck);
	}

	let emptyBox = function(box) {
		while (box.firstChild) {
        	box.removeChild(box.firstChild);
    	}
	}

	let hideCards = function() {
		let cardsOnTable = document.querySelectorAll(".details__card");
		let cardFaces = [];
		
		for (var i = 0; i < cardsOnTable.length; i++) {
			let face = cardsOnTable[i].firstChild;
			cardFaces.push(face);
		}

		for (var i = 0; i < cardFaces.length; i++) {
			cardFaces[i].classList.add("layout__hidden");
		}

		// console.log(cardFaces);
	}

	let revealCards = function() {
		let cardsOnTable = document.querySelectorAll(".details__card");
		let cardFaces = [];
		
		for (var i = 0; i < cardsOnTable.length; i++) {
			let face = cardsOnTable[i].firstChild;
			cardFaces.push(face);
		}

		for (var i = 0; i < cardFaces.length; i++) {
			cardFaces[i].classList.remove("layout__hidden");
		}

		// console.log(cardFaces);
	}










