
let playerCycle = 0;
let letterCycle = 0;
pot = 0;

// ADDING PLAYERS
	let playerCount = 0;
	const roster = []; 

	let birth = function() {
		playerCount += 1;
	}

	function Player(name) {
		this.name = name;
		this.score = 0;
	}

	let printNewborn = function(name,score) {

		let el = document.createElement("div");
		el.classList.add("concentration-layout__active-player__listing");

		let elName = document.createElement("span");
		elName.classList.add("concentration-layout__active-player__name");
		elName.innerText = name;

		activePlayers.appendChild(el);
		el.appendChild(elName);

	}

	let processPlayer = function() {
		let name = playerInput.value;
				let player = new Player(name);
				roster.push(player);
				birth();
				printNewborn(name);
				playerInput.value = '';
				// console.log("new player, " + name + " added to roster."); 
	}

// SUBJECTS
	
	// LISTS
		const easySubjects = [
			"foods",
			"books",
			"vehicles",
			"occupations",
			"quadrupeds",
			"fairy tale characters",
			"fold-able",
			"garments",
			"pairs with chocolate",
			"cannot fly",
			"usually wet",
			"song titles",
			"rhymes with shun",
			"smells bad",
			"heroes"
		];

		const mediumSubjects = [
			"politicians",
			"cities",
			"mortal dangers",
			"comes with stripes",
			"villains",
			"light sources",
			"worn on heads",
			"birds",
			"crunchy",
			"sticky",
			"in the kitchen",
			"crimes",
			"historical events",
			"sharpen things",
			"fasteners"
		];

		const hardSubjects = [
			"writing implements",
			"desserts",
			"fluffy stuff",
			"status symbols",
			"capitals",
			"always moving",
			"forms in spirals",
			"sports equipment"
		];

	let grabEasy = function() {
		const selection = Math.floor(Math.random() * easySubjects.length);
		const chosenSubject = easySubjects[selection];
		subject.innerText = chosenSubject;
		player.innerText = roster[0].name;
		playerCycle += 1;
		// console.log(chosenSubject);
	};

	let grabMed = function() {
		const selection = Math.floor(Math.random() * mediumSubjects.length);
		const chosenSubject = mediumSubjects[selection];
		subject.innerText = chosenSubject;
		player.innerText = roster[0].name;
		playerCycle += 1;
		// console.log(chosenSubject);
	};

	let grabHard = function() {
		const selection = Math.floor(Math.random() * hardSubjects.length);
		const chosenSubject = hardSubjects[selection];
		subject.innerText = chosenSubject;
		player.innerText = roster[0].name;
		playerCycle += 1;
	};

// PLAYER HANDLING

	// LETTERS
		const letters = [
			"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","w","y"
		];

	let rotateLetters = function() {
		if (letterCycle < letters.length-1) {
			letterCycle += 1;
			let nextLetter = letters[letterCycle];
			// console.log(nextLetter);
			currentLetter.innerText = nextLetter;
		} else {
			letterCycle = 0;
			let nextLetter = letters[letterCycle];
			// console.log(nextLetter);
			currentLetter.innerText = nextLetter;
		}
	}

	let nextTurn = function() {
		if (playerCycle < roster.length) {
			// console.log(playerCycle);
			player.innerText = roster[playerCycle].name;
			playerCycle += 1;
			rotateLetters();
		} else {
			pot += 5;
			potCount.innerText = pot;
			playerCycle = 0;
			// console.log(playerCycle);
			player.innerText = roster[playerCycle].name;
			rotateLetters();
		}
	}

	function removeAllChildNodes(parent) {
	    while (parent.firstChild) {
	        parent.removeChild(parent.firstChild);
	    }
	}

	let youreOut = function() {
		let loser = roster[playerCycle - 1];
		// console.log(loser);

		roster.splice(playerCycle-1,1);
		console.log(roster);

		removeAllChildNodes(activePlayers);

		for (var i = roster.length - 1; i >= 0; i--) {
			let el = document.createElement("div");
			el.classList.add("concentration-layout__active-player__listing");

			let elName = document.createElement("span");
			elName.classList.add("concentration-layout__active-player__name");
			elName.innerText = roster[i].name;

			activePlayers.appendChild(el);
			el.appendChild(elName);
		}
	}

// SCORE HANDLING
	
	let resetPot = function() {
		pot = 0;
		potCount.innerText = pot;
	}











