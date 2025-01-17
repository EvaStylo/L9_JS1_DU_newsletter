console.log('funguju!');

const formular = document.querySelector('form')
const textovepolicko = document.querySelector('input')

const odebirat = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value

	if (textovepolicko.value === '' || !textovepolicko.value.includes('@')) {
	formular.textContent = `Chybně zadaný e-mail, obnovte stránku a zadejte e-mail znovu.`
	} else {	
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
	}
}
const kontrolaPolicka = (event) => {
	if (textovepolicko.value === '' || !textovepolicko.value.includes('@')) {
		textovepolicko.classList.add('alertInput')
	} else {
		textovepolicko.classList.remove('alertInput')
	}
}

formular.addEventListener('submit', odebirat)
textovepolicko.addEventListener('input', kontrolaPolicka)