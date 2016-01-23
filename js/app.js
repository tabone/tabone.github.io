'use strict'

;(function () {
	randomGreeting()
	randomHexShadow()
}())

function randomGreeting() {
	var arr = ['Hello', 'Bongu', 'Ciao', 'Hola', 'Dia daoibh']
	var greetings = document.getElementById('hello')
	var msg = ""

	do {
		msg = arr[Math.floor(Math.random() * arr.length)]
	} while (msg === greetings.innerHTML)

	greetings.innerHTML = msg
}

function randomHexShadow() {
	setInterval(function () {
		var img = document.querySelector('#me img')
		var randomHex = Math.floor(Math.random()*16777215).toString(16)
		var boxShadow = '0px 4px 18px -4px #'

		;['b', 'webkitB', 'mozB'].forEach(function (vendor) {
			img.style[vendor + 'oxShadow'] = boxShadow + randomHex
		})

	}, 5000)
}