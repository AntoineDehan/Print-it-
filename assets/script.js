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

const img = document.querySelector(".banner-img")
const imgText = document.querySelector("#banner p")
const dotConteneur = document.querySelector(".dots")

// Fleche de gauche
arrowLeft.addEventListener ("click", () => {
	unselectedDot()
	if(i === 0) {
		i = slides.length - 1
		selectedDot()
		img.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
		imgText.innerHTML = slides[i].tagLine
	}
	else {
		i = i - 1
		selectedDot()
		img.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
		imgText.innerHTML = slides[i].tagLine
	}
});

// Fleche de droite
arrowRight.addEventListener ("click", () => {
	unselectedDot()
	if(i === slides.length - 1) {
		i = 0
		selectedDot()
		img.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
		imgText.innerHTML = slides[i].tagLine
	}
	else {
		i = i + 1
		selectedDot()
		img.setAttribute("src", "./assets/images/slideshow/" + slides[i].image)
		imgText.innerHTML = slides[i].tagLine
	}
});

// Fonction qui permet de créer le nombre de points en rapport au nombre total d'images
function dotAdd() {
	const dot = document.createElement("div")
	dotConteneur.appendChild(dot)
	dot.classList.add("dot")
}
// Lance la fonction dotAdd pour la taille totale du tableau
for(let index = 0; index < slides.length; index++) {
	dotAdd()
}

let firstDot = document.querySelectorAll(".dots div")[0]
firstDot.classList.add("dot_selected")

// Fonction qui permet de changer la class pour faire bouger le point actif
function selectedDot() {
	let currentDot = document.querySelectorAll(".dots div")[i]
	currentDot.classList.add("dot_selected")
}

// Fonction qui permet d'enlever la class pour déseclectionner le point actif
function unselectedDot() {
	let currentDot = document.querySelector(".dot_selected")
	currentDot.classList.remove("dot_selected")
}


