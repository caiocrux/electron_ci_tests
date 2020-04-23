
const { ipcRenderer } = require('electron')
const timer = require('./timer')

console.log("im in a browser screen");

let linkSobre = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.botao-play');
let timerHtml = document.querySelector('.tempo');

linkSobre.addEventListener('click',function(){
	ipcRenderer.send('open-window-about');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
buttonPlay.addEventListener('click',function(){
	if (play) {
		timer.stop()
		play = false
	}
	else {
		timer.start(timerHtml);
		play = true
	}
	imgs = imgs.reverse();
	buttonPlay.src = imgs[0];
	
});
