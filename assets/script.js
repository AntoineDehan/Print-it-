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



// let arrow = document.querySelectorAll(".arrow img")
// for (let i = 0; i < arrow.length; i++) {
// 	arrow[i].addEventListener('click', () => {
// 		console.log("Test")
	
// 	})
// }


let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_left")

const dotConteneur = document.querySelector(".dots")


arrowLeft.addEventListener ("click", () => {
	console.log("Clic")

});

arrowRight.addEventListener ("click", () => {
	console.log("Clic")

});



function dotAdd() {
	const dot = document.createElement("div")
	dotConteneur.appendChild(dot)
	dot.classList.add("dot")
}

for(let i = 0; i < slides.length; i++) {
	dotAdd()
}


// console.log(index)