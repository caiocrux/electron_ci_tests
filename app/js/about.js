
const { ipcRenderer,shell } = require('electron')
const  process = require('process')

let versaoElectron = document.querySelector('#version-electron');
let linkClose = document.querySelector('#link-close');
let linkTwitter = document.querySelector("#link-twitter");


window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}

linkClose.addEventListener('click', function () {
	ipcRenderer.send('close-window-about');
})


linkTwitter.addEventListener('click', function () {
	shell.openExternal("https://www.twitter.com/caiocrux");
})

