console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Thank you for submitting the form!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let catImage = document.querySelector('#cat');

catImage.addEventListener('mouseover', () => {
	alert('You are the best!')
})

const restBtn = document.querySelector('#restButton')
const restaurant = Array("item1", "item2", "item3", "item4");

function randomRest() {
	let randomRest = restaurant[Math.random() * restaurant.length];
	document.getElementById('randomRest').value = randomRest;
}
restBtn.addEventListener('click', randomRest)
