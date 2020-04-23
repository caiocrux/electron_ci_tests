
const { ipcRenderer } = require('electron')

console.log("im in a browser screen");

let linkSobre = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.botao-play');


linkSobre.addEventListener('click',function(){
	ipcRenderer.send('open-window-about');
});

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
buttonPlay.addEventListener('click',function(){
	console.log("inversao",imgs)
	imgs = imgs.reverse();
	console.log("pos inversao",imgs)
	buttonPlay.src = imgs[0];
});
