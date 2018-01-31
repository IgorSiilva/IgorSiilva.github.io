//random colors
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}

})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i < squares.length; i++) {
		//if(colors[i]){
			squares[i].style.background = colors[i];
		//} else {
			squares[i].style.display = 'block';
		//}
	}

})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	for(var i=0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";

})

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
for(var i=0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.backgroundColor = colors[i];
	//add events
	squares[i].addEventListener("click", function(){
		//compare color
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
			for(var i=0; i < squares.length; i++) {
				squares[i].style.backgroundColor = clickedColor;
			}			
		} else {
			messageDisplay.textContent = "Try again";
			this.style.backgroundColor = "#232323";
		}
	})
}
// pick random color
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
//generate colors
function generateRandomColors(num) {
	var arr = [num]	
	for(var i = 0; i < num; i++) {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);		
		arr[i] = "rgb(" + r + "," + " " + g + "," + " " + b + ")";
		console.log(arr[i]);
	}
	return arr;

}