const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Variables globales
let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let i = 0

const dotConteneur = document.querySelector(".dots")

// Fleche de gauche
arrowLeft.addEventListener ("click", () => {
	const img = document.querySelector(".banner-img")
	const imgText = document.querySelector("#banner p")
	unselectedDot()
	if(i === 0) {
		i = slides.length - 1
		console.log(i)
		selectedDot()
		img.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
		imgText.innerHTML = slides[i].tagLine
	}
	else {
		i = i - 1
		console.log(i)
		selectedDot()
		img.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
		imgText.innerHTML = slides[i].tagLine
	}
});

// Fleche de droite
arrowRight.addEventListener ("click", () => {
	console.log("Clic")

});

// Fonction qui permet de créer le nombre de points en rapport au nombre total d'images
function dotAdd() {
	const dot = document.createElement("div")
	dotConteneur.appendChild(dot)
	dot.classList.add("dot")
}
// Lance la fonction dotAdd
for(let index = 0; index < slides.length; index++) {
	dotAdd()
}

// Fonction qui permet de changer la class pour faire bouger le point actif
function selectedDot() {
	let currentDot = document.querySelectorAll(".dots div")[i]
	currentDot.classList.add("dot_selected")
	console.log("dot selectionné: " + i)
}

// Fonction qui permet d'enlever la class pour déseclectionner le point actif
function unselectedDot() {
	let currentDot = document.querySelectorAll(".dots div")[i]
	currentDot.classList.remove("dot_selected")
}




// console.log(index)