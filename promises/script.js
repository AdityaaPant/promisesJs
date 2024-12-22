// function setTimeoutPromisified(ms) {
// 	let p = new Promise((resolve) => setTimeout(resolve, ms));

// 	return p;
// }
// function callBack() {
// 	console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callBack);
function promiseCallBack(resolve) {
	setTimeout(resolve, 3000);
}
function setTimeoutPromisified() {
	return new Promise(promiseCallBack);
}
function main() {
	console.log("main is called");
}
setTimeoutPromisified().then(main);
