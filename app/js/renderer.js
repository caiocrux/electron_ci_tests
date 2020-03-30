
const { ipcRenderer } = require('electron')

console.log("im in a browser screen");

let linkSobre = document.querySelector('#link-about')

linkSobre.addEventListener('click',function(){
	ipcRenderer.send('open-window-about');
});
