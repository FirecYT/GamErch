export default class Game extends EventTarget {
	constructor() {
		super();
	}

	start() {
		this.dispatchEvent(new CustomEvent("start"));
	}

	finish() {
		this.dispatchEvent(new CustomEvent("finish"));
	}
}
