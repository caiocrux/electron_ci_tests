const moment = require('moment');
const {ipcRenderer} = require('electron');

let seconds;
let timerID;
let timer;

module.exports = { 
	start(el){
		timer = moment.duration(el.textContent);
		seconds = timer.asSeconds();
		//usign arrow functions
		clearInterval(timerID);
		console.log(timerID);
		timerID = setInterval(() => {
			seconds++;
			el.textContent = this.secondsParser(seconds);
		},1000);
	},stop(name) {
		clearInterval(timerID);
		let timecount = this.secondsParser(seconds);
		console.log("running");
		ipcRenderer.send('timer-stop',name,timecount);
	},secondsParser(seconds) {
		return moment().startOf('day').seconds(seconds).format("HH:mm:ss");
	}
}
