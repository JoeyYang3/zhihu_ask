var a = document.getElementsByClassName("Avatar AppHeader-profileAvatar");
a[0].click();
var b= document.getElementsByClassName("Button Menu-item AppHeaderProfileMenu-item Button--plain");
b[0].click();
console.log("进入个人主页了");


// window.onload = function(){
// 	var c = document.getElementsByClassName("Tabs-link");
// 	c[9].click();
// 	console.log(c[9]);
// 	console.log("点击提问列表了");

// 	var d = document.getElementsByTagName("a");
// 	// d[18].click();
// 	for (var i = 18;i < d.length - 16; i ++) {
// 		d[i].click();
// 	};
// 	console.log("there are  " + d.length - 16-18 + " questions now.")
// }



$(document).ready(function() {
	// $("a.Tabs-link").css("background-color","yellow");
	console.log($("a.Tabs-link").length)
	$("a.Tabs-link")[2].click();
	// $("div > a[target='_blank'][href^='/question']")[1].click();
   // $("li a");

})

$(document).ready(function(){
	console.log($("a[target='_blank'][href^='/question']").length)
	$("a[target='_blank'][href^='/question']").css("background-color","red");
	$("a[target='_blank'][href^='/question']").click();
	console.log($("div.QuestionItem-title").length)
	$("div.QuestionItem-title").css("background-color","yellow");
		$("div.QuestionItem-title > a").click();
	})



