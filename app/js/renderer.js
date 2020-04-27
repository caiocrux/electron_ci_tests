const { ipcRenderer } = require('electron');
const timer = require('./timer');
const {MongoClient} = require('mongodb');

const uri = "mongodb://electron_mongodb:27017/electron_db";

const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
console.log("im in a browser screen");

let linkSobre = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.botao-play');
let timerHtml = document.querySelector('.tempo');
let name = document.querySelector('.curso');

linkSobre.addEventListener('click',function(){
	ipcRenderer.send('open-window-about');
});


let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
buttonPlay.addEventListener('click',function(){
	if (play) {
		timer.stop(name.textContent);
		play = false
	}
	else {
		timer.start(timerHtml);
		play = true
	}
	imgs = imgs.reverse();
	buttonPlay.src = imgs[0];
});
