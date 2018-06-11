export function getRandomColor() {
   let max = 1 << 24;
   return '#' + (max + Math.floor(Math.random()*max)).toString(16).slice(-6);
}

 export function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(getRandomColor());
	}
	return arr;
}
