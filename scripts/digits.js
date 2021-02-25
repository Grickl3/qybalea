
// console.log("js connected");

// VARIABLES

	const digits = [0,1,2,3,4,5,6,7,8,9];
	let sum = 0;

// ADVANCE FEED

	let advanceFeed = function() {
		const selection = Math.floor(Math.random() * digits.length);
		const chosenDigit = digits[selection];
		feed.innerText = chosenDigit;
		sum += chosenDigit;

		// ADJUST SUM

			let adjustSum = function() {
				let tempSum = (""+sum).split("");
				let numerals = tempSum.map(Number);

				if (numerals.length === 1) {
					sum = numerals[0];
				} else {
					sum = numerals[0]+numerals[1];
				}

				console.log(sum);
			}

			adjustSum();

		// console.log("advanceFeed online");
	}

	let showSum = function() {

		// console.log("showSum online");
	}