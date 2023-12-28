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



let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")
let i = 0
let currentSlide = slides[i]

const dotConteneur = document.querySelector(".dots")

arrowLeft.addEventListener ("click", () => {
	if(i === 0) {
		i = slides.length - 1
		console.log(i)
		selectedDot()
	}
	else {
		i = i - 1
		console.log(i)
		selectedDot()
	}
});

arrowRight.addEventListener ("click", () => {
	console.log("Clic")

});


function dotAdd() {
	const dot = document.createElement("div")
	dotConteneur.appendChild(dot)
	dot.classList.add("dot")
}
// Ajout dots Carrousel
for(let index = 0; index < slides.length; index++) {
	dotAdd()
}


function selectedDot() {
	let currentDot = document.querySelectorAll(".dots div")[i]
	currentDot.classList.add("dot_selected")
	console.log("dot selectionné: " + i)
}




// console.log(index)