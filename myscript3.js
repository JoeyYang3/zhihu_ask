
console.log("entering----------");
var e = document.getElementsByClassName("UserLink-link");
var f = document.getElementsByTagName("p");
var g = ":";
var h = document.getElementsByTagName("h1");
var h1 =  h[h.length-1].innerText;
console.log("Q : " + h1.substring(0,h1.length-2));
console.log("A :")
// console.log("This question has "+ f.length + " answers now.");
// console.log("answer list:");
for (var i = f.length-1; i >= 0;  i--) {
	console.log(e[e.length-1-2*i].innerText,g,f[f.length-1-i].innerText);
};


// var j = document.getElementsByClassName("Button ContentItem-action Button--plain");
// if (j[0].innerText.indexOf("条") > 0) {
// 	j[0].click();
// };

