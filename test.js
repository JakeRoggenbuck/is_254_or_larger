var demo = require('./index.js');

var tests = 6;
var passed = 0;

if (demo.is_254_or_larger(1) == false) {
	console.log("test passed");
	passed++;
} else {
	console.log("test failed");
}
if (demo.is_254_or_larger(100) == false) {
	console.log("test passed");
	passed++;
} else {
	console.log("test failed");
}
if (demo.is_254_or_larger(254) == true) {
	console.log("test passed");
	passed++;
} else {
	console.log("test failed");
}
if (demo.is_254_or_larger(1000) == true) {
	console.log("test passed");
	passed++;
} else {
	console.log("test failed");
}
if (demo.is_254_or_larger("test") == false) {
	console.log("test passed");
	passed++;
} else {
	console.log("test failed");
}
if (demo.is_254_or_larger("foo") == false) {
	console.log("test passed");
	passed++;
} else {
	console.log("test failed");
}
console.log(passed + "/" + tests + " tests passed");
