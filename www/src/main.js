import TimerGame from "./games/timerGame";
import User from "./user";

export default class Main {
	constructor(startButton, finishButton) {
		let it = this;

		this.startButton = startButton;
		this.finishButton = finishButton;

		this.startButton.disabled = false;
		this.finishButton.disabled = true;

		this.user = new User();
		this.game = new TimerGame();

		this.score = document.createElement("p");
		this.updateText();
		document.body.appendChild(this.score);

		this.game.addEventListener("start", ()=>{
			it.startButton.disabled = true;
		});

		this.game.addEventListener("finish", ()=>{
			it.user.gameFinished++;
			it.updateText();
			it.finishButton.disabled = false;
		});

		startButton.addEventListener("click", e=>{
			it.game.start();
		});

		finishButton.addEventListener("click", e=>{
			it.finishButton.disabled = true;
			it.startButton.disabled = false;
		});
	}

	updateText() {
		this.score.innerText = `Игр пройдено: ${this.user.gameFinished}`;
	}
}