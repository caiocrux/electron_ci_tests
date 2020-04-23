const moment = require('moment');

let seconds;
let timerID;
module.exports = { 
	start(el){
		let timer = moment.duration(el.textContent);
		seconds = timer.asSeconds();
		//usign arrow functions
		clearInterval(timerID);
		console.log(timerID);
		timerID = setInterval(() => {
			seconds++;
			el.textContent = this.secondsParser(seconds);
		},1000);
	},stop() {
		clearInterval(timerID);
	},secondsParser(seconds) {
		return moment().startOf('day').seconds(seconds).format("HH:mm:ss");
	}
}
