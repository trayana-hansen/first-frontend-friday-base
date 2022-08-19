const animalObject = {
	elephant: { name: 'elefant', picture: '/img/elephant.jpg', description: 'big fellow' },
	tiger: { name: 'tiger', picture: '/img/standard_tiger.jpg', description: 'big fellow' },
	spider: { name: 'edderkop', picture: '/img/Brachypelma_smithi.jpg', description: 'ugly fellow' },
	koala: { name: 'koala', picture: '/img/_WW236934.jpg', description: 'big fellow' },
};



// the app lives here
const myApp = document.getElementById('app');




buildCard()

function buildCard() {
	for (let myIndex in animalObject) {
		let myName = animalObject[myIndex].name;
		let myURL = animalObject[myIndex].picture;
		let myDescription = animalObject[myIndex].description;

		buildCard(myName, myURL, myDescription)
	}

}

function buildCard(myName, myURL, myDescription, clearParent) {

	if (clearParent) {
		myApp.innerHTML = "";
	}

	const cardFigure = document.createElement("figure");
	const animalName = document.createElement("h2");
	const cardImage = document.createElement("img");
	const animalDescription = document.createElement("p");

	animalName.innerText = myName;
	cardImage.src = myURL;
	animalDescription.innerText = myDescription;


	//Choose the place for all the elements in the DOM
	myApp.appendChild(cardFigure);
	cardFigure.appendChild(animalName);
	cardFigure.appendChild(cardImage);
	cardFigure.appendChild(animalDescription);


}
