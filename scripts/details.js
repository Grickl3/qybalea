
const testJSconnection = function() {
	console.log("detailsJS connected.");
};

// DECKS

	// SUPER BASIC SETS — 0s
		
		// LEVEL 01 — SIMPLE COLORED SHAPES

		// LEVEL 02 — 

	// BASIC SETS — 1s

		// LEVEL 11 — NUMERALS AND WORDS 1

			const level11 = ["1", "2", "3", "4", "one", "two", "three", "four", "five"]
			const level12 = ["1", "2", "3", "4", "5", "6", "7", "8", "one", "two", "three", "four", "five", "six", "seven", "eight"]

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
			card.appendChild(content);
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










