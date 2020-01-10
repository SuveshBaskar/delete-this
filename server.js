console.log("Hello from Server");

let time = new Date().getTime();

if((time%10)%2 == 0){
	console.log("EVEN")
} else {
	console.log("ODD")
}
