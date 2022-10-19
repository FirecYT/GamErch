import Game from "../game";

export default class TimerGame extends Game {
	constructor() {
        super();
        const it = this;

		this.finishTimes = 10;
		this.gameTimes = 0;

        this.text = document.createElement("p");
		this.text.innerText = this.getText();

        this.button = document.createElement("button");
		this.button.innerText = "Click!";
        this.button.addEventListener("click", e=>{
            console.log(it, it.gameTimes, it.finishTimes, it.gameTimes < it.finishTimes);
			if(it.gameTimes < it.finishTimes) {
				it.gameTimes += 1;
			}

			it.text.innerText = it.getText();

            if(it.gameTimes >= it.finishTimes) {
				it.finish();
			}
        })
	}

	start() {
        super.start();

        this.gameTimes = 0;

        document.body.appendChild(this.text);
        document.body.appendChild(this.button);
	}

	finish() {
        super.finish();
        document.body.removeChild(this.text);
        document.body.removeChild(this.button);
	}
    
    getText() {
        return `${this.gameTimes} / ${this.finishTimes}`
    }
}