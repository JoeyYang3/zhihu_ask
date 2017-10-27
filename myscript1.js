
function click_button(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
	var btn = document.getElementsByClassName("Button QuestionAskButton SearchBar-askButton Button--primary Button--blue");  
	btn[0].click();

	// console.log("--------------------");

	// var	a = document.getElementsByTagName("a");
	// console.log(a[a.length-1]);

	// var text = document.getElementsByClassName("Input");
	// console.log(text[1]);
	// console.log(text[2]);

	// console.log("--------------------");
}


function topic_xhr(url,callback){
	var get_topic = new XMLHttpRequest();
	get_topic.open("GET",url,true);
	get_topic.onreadystatechange = function(){
		if (get_topic.readyState == 4) {
			callback(get_topic.responseText)
		};
	}
	get_topic.send();
}





input_question = "为什么网易云音乐最近好多歌都听不了了？";
input_topic = "网易云音乐";
input_detail = "据说很多歌的版权都被QQ音乐买过去了吗？"


// var title_input = $('div.Modal-content > div > form > div> div > div > div.Input-wrapper>textarea');
// title_input.val(input_question);
// title_input.change();


var token = encodeURIComponent(input_topic)
var html;

click_button();
topic_xhr("https://www.zhihu.com/topic/autocomplete?token=" + token + "&max_matches=10&use_similar=0&topic_filter=1",function(result){
	html = result;
	console.log(html);
	console.log(typeof(html));

//把获得到的 Unicode topic转成中文,并在话题那一栏中显示标签
	// topic_unicode =html.split('"')[5];
	// t= topic_unicode.replace("\\","\\\\");
	// topic = unescape(topic_unicode.replace(/\u/g, "%u"));
	// topic= topic.split("\\").join("")
	// // console.log(topic_unicode);
	// console.log(topic);
	
	// var text = document.getElementsByClassName("Input");
	// text[2].innerHTML = topic;
	// window.localStorage.setItem("AskQuestion::topics", '["' + topic + '"]');
	// console.log(window.localStorage["AskQuestion::topics"]);
	// var	a = document.getElementsByTagName("a");
	// a[a.length-1].href="/topic/"+ topic_num;
	// a[a.length-1].innerHTML = topic;
	// console.log(a[a.length-1]);

	topic_num = html.split('"')[7];
	console.log("get the topic number :")
	console.log(topic_num);

//提交参数的XHR POST请求
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
	console.log("")
	console.log(data);
	commit_xhr.send(JSON.stringify(data));

	// var commit_btn = document.getElementsByClassName("Button Button--primary Button--blue");
	// commit_btn[1].click();
	console.log("after commit");


});
