
function click_button(url,callback){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	// console.log(window.localStorage["AskQuestion::title"]);
	// console.log(window.localStorage["AskQuestion::topics"]);

	// window.localStorage.setItem("AskQuestion::title", "你眼中最美的人是谁？");
	// window.localStorage.setItem("AskQuestion::topics", '[]');

	// window.localStorage.setItem("AskQuestion::title", "周一了？");

	var btn = document.getElementsByClassName("Button QuestionAskButton SearchBar-askButton Button--primary Button--blue");  
	// btn[0].innerText = 'hhh' ;
	// console.log("3");
	btn[0].click();

	console.log("--------------------");
	console.log(window.localStorage["AskQuestion::title"]);
	console.log(window.localStorage["AskQuestion::topics"]);
	// window.localStorage.setItem("AskQuestion::title", "周一了？");
	console.log("--------------------");


// 	<div class="Tag Tag--removable">
// 	<span class="Tag-content">
// 	<a target="_blank" href="/topic/19561831">武汉大学</a>
// 	</span>
// 	<button type="button" class="Tag-remove">
// 	<svg width="14" height="16" viewBox="0 0 12 12" class="Icon Icon--boldRemove" aria-hidden="true" style="height: 16px; width: 14px;">
// 	<title></title>
// 	<g><path fill-rule="evenodd" d="M3 2L2 3l3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1-3 3">
// 	</path></g></svg>
// 	</button>
// 	</div>


// data-text="true"
// var span =  document.createElement("span");
// span.setAttribute("data-text","true");

// var tlist = document.getElementsByClassName("Input-wrapper Input-wrapper--spread Input-wrapper--large");
// 	var cont = document.createElement("div");
// 	cont.setAttribute("class", "Tag Tag--removable");
// 	var span = document.createElement("span");
// 	span.setAttribute("class","Tag-content");
// 	var link = document.createElement("a");
// 	link.setAttribute("target", "_blank");
// 	link.setAttribute("innerText","武汉");
// 	span.appendChild(link);
// 	cont.appendChild(span);
// 	var button = document.createElement("button");
// 	button.setAttribute("type","button");
// 	button.setAttribute("class","Tag-remove");
// 	var svg = document.createElement("svg");
// 	svg.setAttribute("width","14");
// 	svg.setAttribute("height","16");
// 	svg.setAttribute("viewBox","0 0 12 12");
// 	svg.setAttribute("class", "Icon Icon--boldRemove");
// 	svg.setAttribute("aria-hidden", "true");
// 	svg.setAttribute("style","height: 16px; width: 14px;");
// 	button.appendChild("svg");
// 	cont.appendChild("button");
// 	tlist[1].appendChild(cont);

	// var text = document.getElementsByTagName("textarea");
	// console.log(text[0].value);
	// if (text[0].value) {
	// 	text[0].value = "";

	// };
	// text[0].value = "怎么看待武汉甜品节？";
	// 
	
	var get_topic = new XMLHttpRequest();
	get_topic.open("GET",url,true);
	// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	get_topic.onreadystatechange = function(){
		if (get_topic.readyState == 4) {
			callback(get_topic.responseText)
		};
	}
	get_topic.send();
	
	var	a = document.getElementsByTagName("a");
	// a[a.length-1].href="/topic/19968547";
	// a[a.length-1].innerHTML = "周一见";
	console.log(a[a.length-1]);

	var text = document.getElementsByClassName("Input");
	// document.getElementsByClassName("Input")[1].value = "怎么看待武汉甜品节？";
	console.log(text[1]);

	// console.log(text[1].value);
	// text[1].click();
	// document.getElementsByClassName("Input")[1].value = "怎么看待武汉甜品节？";  
	// console.log(text[1]);

	// text[2].click();
	// document.getElementsByClassName("Input")[2].value = "周一见";
	// document.getElementsByClassName("Input")[2].innerHTML = "周一见";

	console.log(text[2]);

	// var commit_btn = document.getElementsByClassName("Button Button--primary Button--blue");
	// commit_btn[1].click();

	// setTimeout(2000);
	// console.log("after commit");

}



function commit(url,callback){
	var commit_xhr = new XMLHttpRequest();
	commit_xhr.open("POST",url,true);
	commit_xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	commit_xhr.onreadystatechange = function(){
		if (commit_xhr.readyState == 4) {
			callback(commit_xhr.responseText)
		};
	}
	commit_xhr.send('topic_url_tokens = ');



}





console.log(window.localStorage["AskQuestion::title"]);
console.log(window.localStorage["AskQuestion::topics"]);

question = "你眼中最美的人是谁？"
window.localStorage.setItem("AskQuestion::title", question);




var html;
var token = encodeURIComponent("最美的人")
click_button("https://www.zhihu.com/topic/autocomplete?token=" + token + "&max_matches=10&use_similar=0&topic_filter=1",function(result){
	html = result;
	console.log(html);
	console.log(typeof(html));

	topic_unicode =html.split('"')[5];
	t= topic_unicode.replace("\\","\\\\");
	topic = unescape(topic_unicode.replace(/\u/g, "%u"));
	topic= topic.split("\\").join("")
	topic_num = html.split('"')[7];
	callback(topic_num);
	console.log(topic_unicode);
	console.log(topic);
	console.log(topic_num);

	var text = document.getElementsByClassName("Input");
	text[2].innerHTML = topic;

	window.localStorage.setItem("AskQuestion::topics", '["' + topic + '"]');
	console.log(window.localStorage["AskQuestion::topics"]);
	var	a = document.getElementsByTagName("a");
	a[a.length-1].href="/topic/"+ topic_num;
	a[a.length-1].innerHTML = topic;
	console.log(a[a.length-1]);

	var commit_btn = document.getElementsByClassName("Button Button--primary Button--blue");
	commit_btn[1].click();
	console.log("after ciick")

	var commit_xhr = new XMLHttpRequest();
	commit_xhr.open("POST",url,true);
	commit_xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	commit_xhr.onreadystatechange = function(){
		if (commit_xhr.readyState == 4) {
			callback(commit_xhr.responseText)
		};
	}
	topic_url = '["' + topic_num + '"]'
	commit_xhr.send('opic_url_tokens=' + topic_url );


});
