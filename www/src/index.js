import Main from "./main";

window.addEventListener("load", ()=>{
	const startButton = document.getElementById("start_game");
	const finishButton = document.getElementById("finish_game");
	
	let main = new Main(startButton, finishButton);
});
