
function click_button(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	var btn = document.getElementsByClassName("Button QuestionAskButton SearchBar-askButton Button--primary Button--blue");  
	// btn[0].innerText = 'hhh' ;
	// console.log("3");
	btn[0].click();

	console.log("--------------------");
	console.log(window.localStorage["AskQuestion::title"]);
	console.log(window.localStorage["AskQuestion::topics"]);
	console.log(window.localStorage["AskQuestion::detail"]);

	var	a = document.getElementsByTagName("a");
	// a[a.length-1].href="/topic/19968547";
	// a[a.length-1].innerHTML = "周一见";
	console.log(a[a.length-1]);

	var text = document.getElementsByClassName("Input");
	// document.getElementsByClassName("Input")[1].value = "怎么看待武汉甜品节？";
	console.log(text[1]);
	console.log(text[2]);

	console.log("--------------------");
}


function topic_xhr(url,callback){
	var get_topic = new XMLHttpRequest();
	get_topic.open("GET",url,true);
	// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	get_topic.onreadystatechange = function(){
		if (get_topic.readyState == 4) {
			callback(get_topic.responseText)
		};
	}
	get_topic.send();
}




function commit_xhr(url,callback){
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





input_question = "do you think will korea fight against america？";
input_topic = "你的名字";
input_detail = "自己有过或者遇到过类似的人和事"

//window.localStorage.setItem("AskQuestion::title", input_question);
var title_input = $('div.Modal-content > div > form > div> div > div > div.Input-wrapper>textarea')
title_input.val(input_question)
title_input.change()

window.localStorage.setItem("AskQuestion::detail", input_detail);
var span =  document.createElement("span");
span.setAttribute("data-text","true");
span.innerHTML = input_detail;
// span = document.getElementsByTagName("span");
// span[span.length-2].value = input_detail;

var token = encodeURIComponent(input_topic)
var html;

click_button();
topic_xhr("https://www.zhihu.com/topic/autocomplete?token=" + token + "&max_matches=10&use_similar=0&topic_filter=1",function(result){
	html = result;
	console.log(html);
	console.log(typeof(html));

	topic_unicode =html.split('"')[5];
	t= topic_unicode.replace("\\","\\\\");
	topic = unescape(topic_unicode.replace(/\u/g, "%u"));
	topic= topic.split("\\").join("")
	topic_num = html.split('"')[7];
	// callback(topic_num);
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


/////////
	var commit_xhr = new XMLHttpRequest();
	// var response;
	url = "https://www.zhihu.com/api/v4/questions?include=detail%2Ceditable_detail%2Ccomment_count%2Ccan_comment%2Cadmin_closed_comment%2Canswer_count%2Ccollapsed_answer_count%2Cfollower_count%2Cvisit_count%2Ctopics%2Cauthor%2Cexcerpt%2Cvoteup_count%2Cis_editable%2Cis_normal%2Cstatus%2Credirection%2Cquestion_type%2Cis_muted%2Ccreated%2Cupdated_time%2Chas_publishing_draft%2Crelationship.is_author%2Cis_anonymous%2Cis_following%2Cconcerned_followers%2Ccan_edit%2Ccan_collapse_answers%2Ccan_stick_answers%2Ccan_lock%2Cmy_answer%3Bauthor.following_question_count%2Cquestion_count"
	commit_xhr.open("POST",url,true);
	commit_xhr.setRequestHeader("Content-type","application/json");
	commit_xhr.onreadystatechange = function(){
		if (commit_xhr.readyState == 4) {
			return(commit_xhr.responseText);
			// console.log(response);
		};
	}

	data = {
		"type": 0,
		"title": input_question,
		"topic_url_tokens": [topic_num.toString()],
		"detail": input_detail,
		"is_anonymous": false
	}
	console.log(data);
	commit_xhr.send(JSON.stringify(data));

	var commit_btn = document.getElementsByClassName("Button Button--primary Button--blue");
	commit_btn[1].click();
	console.log("after ciick");


});
