// function setTimeoutPromisified(ms) {
// 	let p = new Promise((resolve) => setTimeout(resolve, ms));

// 	return p;
// }
// function callBack() {
// 	console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callBack);
// function promiseCallBack(resolve) {
// 	setTimeout(resolve, 3000);
// }
// function setTimeoutPromisified() {
// 	return new Promise(promiseCallBack);
// }
// function main() {
// 	console.log("main is called");
// }
// setTimeoutPromisified().then(main);
// function random() {}
// let p = new Promise(random);
// function callback() {
// 	console.log("promise succeded");
// }
// p.then(callback);

// function setTimeoutPromisified(ms) {
// 	return new Promise((resolve) => setTimeout(resolve, ms));
// }
// async function solve() {
// 	await setTimeoutPromisified(1000);
// 	console.log("hi");
// 	await setTimeoutPromisified(3000);
// 	console.log("hi");
// 	await setTimeoutPromisified(4000);
// 	console.log("hi");
// }
// solve();
const { rejects } = require("assert");
const fs = require("fs");

function setTimeoutPromisified(duration) {
	return new Promise(function (resolve) {
		setTimeout(resolve, duration);
	});
}

function readFileAsync() {
	return new Promise(function (resolve, reject) {
		fs.readFile("a.txt", "utf-8", function (err, data) {
			if (err) {
				reject("file not found");
			} else {
				resolve(data);
			}
		});
	});
}
// readFileAsync()
// 	.then(function (x) {
// 		console.log("file has been read " + x);
// 	})
// 	.catch(function (e) {
// 		console.log(e);
// 	});
async function readFile() {
	try {
		const data = await readFileAsync();
		console.log("file has been read " + data);
	} catch (error) {
		console.log(error);
	}
}

readFile();
