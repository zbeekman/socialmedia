// **Instructions** **main.js**
// ------------

// In this document you will find instructions on how to adjust
// different parameters of the paradigm. You can apply the desired
// changes to the document main.js on your computer or server, using a
// source code editor.  The following parameters are necessary to
// adjust: number of avatar images, and the redirect link at the end
// of the study. All other parameters have a default option and
// adjustments are optional.

$(function() {

    // **Parameters**
    // ------------

    function set_settings() {
	window.settings = [];

	// These were moved from profiles.json, it was causing load order issues

	// **Group members profiles**
	// Each profile consists of (1) avatar, (2) username, (3) personal description, (4) number of "likes" the profile will receive throughout the interaction, (5) number of "dislikes" the profile will recieve

	window.others = {
	    "posts" : [
		{
		    "avatar": "avatars/others/george.png",
		    "username": "George",
		    "text": "I am liberal. I am pro-choice, a strong advocate for women's rights, minority rights, support gun control, and a strong supporter of refugees and DACA. I wish the government did more to help those less fortunate. I think that people need to be more open to immigrants as they help the country and although some are illegal, we shouldnâ€™t remove them from the U.S. because they are only coming here to try to better themselves and their families. ",
		    "likes": [45000, 50000, 110000, 150000],
		    "dislikes": [45000, 60000, 130000]
		},
		{
		    "avatar": "avatars/others/nick.png",
		    "username": "Nick",
		    "text": "I am definitely liberal. To state my beliefs simply, I am very passionate about gun control, higher taxes on the top 1%, and opening our borders to refugees. There should be more intensive background checks for any purchase of guns. I also am an advocate for LGBTQ+ and Women's reproductive and sexual health rights. Organizations like Planned Parenthood that help women stay healthy and safe should be funded by taxpayers.",
		    "likes": [12000, 14000, 15000, 35000, 80000, 100000, 110000, 150000, 168000],
			"dislikes": [77000, 9999999]
		},
		{
		    "avatar": "avatars/others/john.png",
		    "username": "John",
		    "text": "I am more conservative, and focus on a few different main pillars. General conservative values including limiting abortions, limited government, strong national defense, and free enterprise. I am passionate about providing housing and psychological treatment to veterans, because we do not support the military enough. What is also very important to me is my right to bear arms. I feel like limits to the second amendment are a threat to society and the safety of citizens.",
		    "likes": [20000, 21000],
		    "dislikes": [11000, 35000, 100000, 190000]
		},
		{
		    "avatar": "avatars/others/mary.png",
		    "username": "Mary",
		    "text": "I identify as very liberal on essentially all political issues from the economy to social issues to foreign policy. Some of the most important political topics to me are environmental protection, protecting reproductive rights, and gun reform. Another important issue to me is ensuring equality for all Americans in law and in practice, even if that means more laws and policies. I believe that the government and taxes exist in order to protect and provide for citizens.",
		    "likes": [10000, 12000, 40000, 80000, 120000],
			"dislikes": [68100, 9999999]
		},
		{
		    "avatar": "avatars/others/sarah.png",
		    "username": "Sarah",
		    "text": "I would consider myself to be more liberal. One of the most pressing issues for me is climate change. I think that drastic action should be taken on both a national and international level to combat climate change. I think gun reform is very critical to creating a safer society and I also think pro LGBT and anti-discriminatory enforcements policies like affirmative action are important for creating a safe and equal space for everyone.",
		    "likes": [40000, 45000, 90000, 100000, 150000, 155000, 168000],
		    "dislikes": [108000, 9999999]
		},
		{
		    "avatar": "avatars/others/ana.png",
		    "username": "Ana",
		    "text": "I am more liberal. Education, health care, and the environment are stances that are very important to me. I believe there should be more funding in public education, especially in lower-income neighborhoods. I also believe in tighter gun control and that the death penalty should be abolished. Another thing important to me politically is the US Prison System and how it targets minorities and underprivileged people.",
		    "likes": [20000, 25000, 95000],
		    "dislikes": [65000, 9999999]
		},
		{
		    "avatar": "avatars/others/lauren.png",
		    "username": "Lauren",
		    "text": "I identify as more conservative. Currently, I am very invested in the debate on the security of the United States. There is a drain on our resources by supporting illegal immigration, and this needs to be stopped. Maintaining the safety of our country from others should be a top priority. Thus, government funding should be put towards maintaining the safety of American citizens. I also do not believe that our country is currently able to undertake universal healthcare.",
		    "likes": [12000, 38000],
		    "dislikes": [15000, 50000, 60000, 75000, 175000]
		},
		{
		    "avatar": "avatars/others/ky.png",
		    "username": "Ky",
		    "text": "I am liberal. Politically I care a lot about healthcare because I am interested in becoming a doctor one day and I think everyone should have free healthcare, as it is a human right. I think that taxes should be based on income level and the wealthiest should pay even higher taxes. With increases in taxes on the wealthy, we can allow all Americans to have access to free healthcare, which can make our country better.",
		    "likes": [58000, 88000, 11000, 120000, 15000],
		    "dislikes": [11500, 9999999]
		},
		{
		    "avatar": "avatars/others/arjen.png",
		    "username": "Arjen",
		    "text": "I am more liberal. I am from California and environmental issues are also very important to me because of the impact they have on my home state and how much they were emphasized in school. We need to take drastic action on climate change, make sure people have a livable wage, and have higher taxes for the ultra-wealthy. Climate change is important because it affects all of the future generations and us.",
		    "likes": [12000, 40000, 120000],
		    "dislikes": [65000, 125000]
		},
		{
		    "avatar": "avatars/others/heather.png",
		    "username": "Heather",
		    "text": "I'm more liberal. I believe in universal health care, social programming, free college education, and the importance of social responsibility rather than simply individual rights. I stand for women's reproductive rights and believe that every woman has the right to have access to an abortion. I also take a firm stance on gun laws, I think there should be tighter restrictions for who is able to own them and what type of guns are made available.",
		    "likes": [13000, 71000, 80000, 88000, 120000],
		    "dislikes": [50500, 89000]
		},
		{
		    "avatar": "avatars/others/jane.png",
		    "username": "Jane",
		    "text": "I am liberal. Something important to me is he opioid crisis - I believe Americans should be spending more money on programs for Americans suffering from addiction and training physicians. I believe in universal healthcare, social programming, free education, and the importance of social responsibility rather than simply individual rights.",
		    "likes": [10000, 55000, 165000],
		    "dislikes": [12000, 75000, 200500],      },

	    ]
	};

	// **Number** **of** **Avatar** **Images**

	// Number of avatars the user can choose from. Can be changed
	// to any number, depending on how many avatars you would like
	// to display. Default: 82

	// The avatar images used in the online preview of the
	// paradigm were created using by pickaface.net and due to
	// their terms not available for redistribution. You should
	// therefore create your own images. All images should be
	// 250x250 pixels in size and carry the names
	// "avatar_NUMBER.png" (e.g. avatar_1.png; "png" should be
	// lower case; the numbers in the names should be consequtive,
	// starting from 1). The number of avatars dependeds on the
	// corresponding parameter. The images should be placed in
	// folder "avatars," located in the main study folder
	// extracted on your computer or server.

	settings.numberofavatars = 73;


	// **Redirection**

	// After the introduction task is over participants should be
	// redirected to a survey with manipulation checks and
	// dependent measures, to subsequent tasks, or to further
	// instructions.  If the study is called with a parameter for
	// redirection, as explained in the documentation, this value
	// is overwritten.  To the redirect link, the following
	// information will be appended: (1) participant number, (2)
	// condition, (3) username, (4) description submitted by
	// participant. These variables can be extracted from the
	// link, saved as data, and used for linking the Social Media
	// Ostracism paradigm to subsequent tasks and measures. See
	// documentation for more details.

	settings.defaultredirect = 'http://fppvu.qualtrics.com/SE/?SID=SV_a9u9MdnpIRuxctT';


	// **Tasklength**

	// Length of the group introduction task in milliseconds. Can
	// be changed to any number (in ms). Default: 180000 (3min)
	settings.tasklength = 180000;


	// **Number** **of** **"likes"**

	// Each received "like" is indicated by the timepoint (in ms)
	// at which the "like" will appear. To change the number of
	// "likes" in each condition, add or remove timepoints. Make
	// sure that every timepoint (except the first) is preceded by
	// a single comma.  In cases with only 1 "like," a second
	// "like" is added with time point 9999999. This "like" is
	// added for programming purposes and is never executed, as it
	// is outside the task time

	// In condition 1, the participant will receive 1 like at the
	// following timepoint (in ms). Default: [12000, 9999999]
	settings.condition_1_likes = [20000, 35000, 100000, 150000, 165000];

	// In condition 2, user will receive 6 likes at the following
	// timepoints (in ms). Default:
	// [10000, 15000,35000,80000,1320000,150000]
	settings.condition_2_likes = [10000, 15000,35000,80000,1320000,150000];

	// In condition 3, user will receive 9 likes at the following
	// timepoints (in ms). Default:
	// [10000,11000,15000,35000,80000,100000,110000,150000,20000]
	settings.condition_3_likes = [10000, 11000,15000,35000,80000,100000,110000,150000,20000];

	// **Others' likes**

	// To keep the total distribution of "likes" constant across
	// conditions, The "likes" received by one group member can be
	// adjusted according to the participant's. By default, the
	// other group member receives 9 "likes" in the
	// participant-ostracism condition, 5 in the
	// participant-inclusion condtion, and 1 in the
	// participant-overinclusion condtion.
	settings.condition_1_adjusted_likes = [12000, 14000,15000,35000,80000,100000,110000,150000,20000]; // 9
	settings.condition_2_adjusted_likes = [12000, 14000,15000,35000,80000]; // 5
	settings.condition_3_adjusted_likes = [12000, 9999999]; //1

	// Usernames by which the participant will receive "likes"
	// If group member names are changed, these should be changed accordingly.
	settings.likes_by = ['Lauren','John','Sarah','Arjen','Jane'];

	// **Number** **of** **"dislikes"**

	// Each received "dislike" is indicated by the timepoint (in
	// ms) at which the "dislike" will appear. To change the
	// number of "dislikes" in each condition, add or remove
	// timepoints. Make sure that every timepoint (except the
	// first) is preceded by a single comma.  In cases with only 1
	// "dislike," a second "dislike" is added with time point
	// 9999999. This "dislike" is added for programming purposes
	// and is never executed, as it is outside the task time

	// In condition 1, the participant will receive 1 dislike at
	// the following timepoint (in ms). Default: [12000, 9999999]
	settings.condition_1_dislikes = [40000,9999999];

	// In condition 2, user will receive 6 dislikes at the
	// following timepoints (in ms). Default:
	// [10000,15000,35000,80000,1320000,150000]
	settings.condition_2_dislikes = [10000, 15000,35000,80000,1320000,150000];

	// In condition 3, user will receive 9 dislikes at the
	// following timepoints (in ms). Default:
	// [10000,11000,15000,35000,80000,100000,110000,150000,20000]
	settings.condition_3_dislikes = [10000, 11000,15000,35000,80000,100000,110000,150000,20000];

	// **Others' dislikes**

	// To keep the total distribution of "dislikes" constant
	// across conditions, The "dislikes" received by one group
	// member can be adjusted according to the participant's. By
	// default, the other group member receives 9 "dislikes" in
	// the participant-ostracism condition, 5 in the
	// participant-inclusion condtion, and 1 in the
	// participant-overinclusion condtion.
	settings.condition_1_adjusted_dislikes = [12000, 9999999]; // 9
	settings.condition_2_adjusted_dislikes = [12000, 14000,15000,35000,80000]; // 5
	settings.condition_3_adjusted_dislikes = [12000, 9999999]; //1

	// Usernames by which the participant will receive "dislikes"
	// If group member names are changed, these should be changed accordingly.
	settings.dislikes_by = ['Mary','Heather','George','Nick'];
    }

    // -------------------
    // Above were the basic parameters you can adjust using the
    // instructions. The remaining code is also annotated, but we do
    // not recommend changing it, unless you are comfortable with web
    // programming.
    // -------------------


    // **Slide:** **Intro**

    // With instructions regarding the task. The intro container is
    // shown, the continue calls the next slide when clicked.
    function init_intro() {
	$('#intro').show();
	$('#submit_intro').on('click',function() {
	    $('#intro').hide();
	    init_name();
	});
    }


    // **Slide:** **Username**
    // Note: Only alphanumeric usernames without spaces are accepted

    function init_name() {

	$('#name').show();


	$('#submit_username').on('click',function() {

	    var error = 0;
	    var uname = $('#username').val();

	    if(uname == "") {
		error = 1;
		errormsg = 'Please enter text';
		uname = "undefined";
	    }
	    if(not_alphanumeric(uname)) {
		error = 1;
		errormsg = 'Please only letters (and no spaces)';
	    }

	    if(error == 0) {
		$('#name').hide();
		window.username = $('#username').val();
		init_avatar();
	    } else {
		alertify.log(errormsg,"error");
	    }


	});
    }

    // **Slide:** **Avatar**
    // Avatar slide in which the participant is asked to select an avatar

    function init_avatar() {
	$('#avatar').show();

	var avatars = window.settings.numberofavatars;
	for(var i=0; i<avatars; i++)
	{
	    $('.avatars').append('<img id="avatar_' + i+ '" src="avatars/avatar_' + i + '.png" class="avatar" />');
	}

	$('.avatar').on('click', function() {
	    $('.avatar').removeClass('selected');
	    $(this).addClass('selected');
	});

	$('#submit_avatar').on('click',function() {
	    if($('.selected').length == 1) {
		$('#avatar').hide();
		window.avatar = $('.selected').attr('id');
		window.avatarexport = /avatar_([^\s]+)/.exec(window.avatar)[1];
		init_text();
	    } else {
		alertify.log("Please select an avatar","error");
	    }
	});

    }


    // **Slide:** **Description**
    function init_text() {
	$('#text').show();

	$("#description").keyup(function(){
	    $("#count").text("Characters left: " + (400 - $(this).val().length));
	});

	$('#submit_text').on('click',function() {

	    var error = 0;
	    if($('#description').val() == "") {
		error = 1;
		errormsg = 'Please enter text';
	    }
	    if($('#description').val() !== "" && $('#description').val().length < 200) {

		error = 1;
		errormsg = 'Please write a bit more';
	    }
	    if($('#description').val().length > 401) {

		error = 1;
		errormsg = 'Please enter less text';
	    }
	    if(error == 0) {
		$('#text').hide();
		window.description = $('#description').val();
		init_fb_intro();
	    } else {
		alertify.log(errormsg,"error");
	    }
	});
    }


    // **Slide:** **Instructions**
    function init_fb_intro() {
	$('#fb_intro').show();

	$('#submit_fb_intro').on('click',function() {

	    $('#fb_intro').hide();
	    init_fb_login();

	});
    }


    // **Slide:** **Login** **Screen**
    // Participant can continue after 8000ms = 8s
    function init_fb_login() {
	$('#fb_login').show();


	setTimeout(function() {
	    $('#msg_all_done').show();
	    $("#loader").hide();
	}, 8000);

	$('#submit_fb_login').on('click',function() {
	    $('#fb_login').hide();
	    init_task();
	});
    }

    // **Slide:** **Task**
    function init_task() {

	$('#task').show();

	shortcut.add("Backspace",function() {});

	jQuery("#countdown").countDown({
	    startNumber: window.settings.tasklength/1000, // in seconds
	    callBack: function(me) {
		console.log('over');
		$('#timer').text('00:00');
	    }
	});

	users = {
	    "posts" : [
		{
		    "avatar": 'avatars/' + window.avatar + '.png',
		    "username": window.username,
		    "text": window.description,
		    "likes": window.settings.condition_likes,
		    "dislikes": window.settings.condition_dislikes,
		    "usernames": window.settings.likes_by
		}
	    ]
	};

	// Add user box to slide
	var tpl = $('#usertmp').html(),html = Mustache.to_html(tpl, users);
	$("#task").append(html);

	// Add other boxes to slide
	var tpl = $('#otherstmp').html(),html = Mustache.to_html(tpl, others);
	$("#task").append(html);

	// Randomize order of other players boxes
	function reorder() {
	    var grp = $("#others").children();
	    var cnt = grp.length;

	    var temp,x;
	    for (var i = 0; i < cnt; i++) {
		temp = grp[i];
		x = Math.floor(Math.random() * cnt);
		grp[i] = grp[x];
		grp[x] = temp;
	    }
	    $(grp).remove();
	    $("#others").append($(grp));
	}
	reorder();

	// Initalize Masonry plugin
	// For display of user and other players boxes in columns without gaps
	$('#task').masonry({
	    itemSelector : '.entry',
	    fitWidth: true
//	    columnWidth : 920
	});

	// When user receives likes
	$('.userslikes').each(function() {
	    var that = $(this);
	    var usernames = $(this).data('usernames').split(",");
	    var times = $(this).data('likes').split(",");

	    for(var i=0; i<times.length; i++)
	    {
		times[i] = +times[i];

		themsg = usernames[i] + " liked your post";

		setTimeout(function(themsg) {
		    that.text(parseInt(that.text()) + 1);
		    alertify.success(themsg)

		}, times[i], themsg);
	    }
	});

	// When others receive likes
	$('.otherslikes').each(function() {
	    var that = $(this);
	    var times = $(this).data('likes').split(",");

	    for(var i=0; i<times.length; i++)
	    {
		times[i] = +times[i];

		setTimeout(function () {
		    that.text(parseInt(that.text()) + 1);
		}, times[i]);

	    }
	});


	// Initialize like buttons
	$('.btn-like').on('click', function() {
	    $(this).prev().prev().prev().text(parseInt($(this).prev().prev().prev().text()) + 1);
	    // Like buttons can only be clicked once
	    $(this).parent().find('button, btn').attr("disabled", true);
	});

	// When user receives dislikes
	$('.usersdislikes').each(function() {
	    var that = $(this);
	    var usernames = $(this).data('usernames').split(",");
	    var times = $(this).data('dislikes').split(",");

	    for(var i=0; i<times.length; i++)
	    {
		times[i] = +times[i];

		themsg = usernames[i] + " disliked your post";

		setTimeout(function(themsg) {
		    that.text(parseInt(that.text()) + 1);
		    alertify.error(themsg)

		}, times[i], themsg);
	    }
	});

	// When others receive dislikes
	$('.othersdislikes').each(function() {
	    var that = $(this);
	    var times = $(this).data('dislikes').split(",");

	    for(var i=0; i<times.length; i++)
	    {
		times[i] = +times[i];

		setTimeout(function () {
		    that.text(parseInt(that.text()) + 1);
		}, times[i]);

	    }
	});

	// Initialize dislike buttons
	$('.btn-dislike').on('click', function() {
	    $(this).prev().text(parseInt($(this).prev().text()) + 1);
	    // Dislike buttons can only be clicked once
	    $(this).parent().find('button, btn').attr("disabled", true);
	});

	$('#task').masonry

	// Redirect, default after 180000ms = 180s = 3min
	setTimeout(function() {

	    $(window).unbind('beforeunload');

	    $('#final-continue').show();

	    $('#timer').text('00:00');

	    $('#final-continue').on('click', function() {

		// Redirect link
		location.href = window.redirect+'&p='+window.participant+'&c='+window.condition+'&u='+encodeURI(window.username)+'&av='+window.avatarexport+'&d='+encodeURI(window.description);

	    });

	},window.settings.tasklength); // timing for task

    }


    // Get URL parameters to set condition number and participant number
    function get_params() {
	// condition number must be 1, 2, or 3
	if(window.QueryString.c !== undefined && !isNaN(parseInt(window.QueryString.c)) && parseInt(window.QueryString.c) > 0 && parseInt(window.QueryString.c) < 4) {
	    window.condition = parseInt(window.QueryString.c);
	} else {
	    window.condition = 1; // condition defaults to 1
	}
	// participant number must be numeric
	if(window.QueryString.p !== undefined && !isNaN(parseInt(window.QueryString.p))) {
	    window.participant = parseInt(window.QueryString.p);
	} else {
	    window.participant = 0; // participant defaults to 0
	}
	// redirect
	if(window.QueryString.redirect !== undefined && window.QueryString.redirect !== "") {
	    window.redirect = decode(window.QueryString.redirect);
	} else {
	    window.redirect = window.settings.defaultredirect;
	}

	var urlHasQuestionMark = (window.redirect.indexOf("?") > -1);
	if(!urlHasQuestionMark) {
	    window.redirect = window.redirect+"?redir=1";
	}
	//alert(window.redirect);
    }

    // adjustments according to current condition
    function adjust_to_condition() {

	// the number of likes a person receives depends on the
	// condition in addition, the number of likes another person
	// receives is adjusted, so that there is the same number of
	// likes overall
	switch(condition) {
	case 1:
	    window.settings.condition_likes = settings.condition_1_likes;
	    window.others.posts[1].likes = settings.condition_1_adjusted_likes;
	    window.settings.condition_dislikes = settings.condition_1_dislikes;
	    window.others.posts[1].dislikes = settings.condition_1_adjusted_dislikes;
	    break;
	case 2:
	    window.settings.condition_likes = settings.condition_2_likes;
	    window.others.posts[1].likes = settings.condition_2_adjusted_likes;
	    window.settings.condition_dislikes = settings.condition_2_dislikes;
	    window.others.posts[1].dislikes = settings.condition_2_adjusted_dislikes;
	    break;
	case 3:
	    window.settings.condition_likes = settings.condition_3_likes;
	    window.others.posts[1].likes = settings.condition_3_adjusted_likes;
	    window.settings.condition_dislikes = settings.condition_3_dislikes;
	    window.others.posts[1].dislikes = settings.condition_3_adjusted_dislikes;
	    break;
	}

    }


    // The variable QueryString contains the url parameters,
    // i.e. condition no. and participant no.  via
    // http://stackoverflow.com/a/979995
    window.QueryString = function () {
	var query_string = {};
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
	    var pair = vars[i].split("=");
	    // If first entry with this name
	    if (typeof query_string[pair[0]] === "undefined") {
		query_string[pair[0]] = pair[1];
		// If second entry with this name
	    } else if (typeof query_string[pair[0]] === "string") {
		var arr = [ query_string[pair[0]], pair[1] ];
		query_string[pair[0]] = arr;
		// If third or later entry with this name
	    } else {
		query_string[pair[0]].push(pair[1]);
	    }
	}
	return query_string;
    } ();


    // Function to check letters and numbers
    // via http://www.w3resource.com/javascript/form/letters-numbers-field.php
    function not_alphanumeric(inputtxt) {
	var letterNumber = /^[0-9a-zA-Z]+$/;
	if(inputtxt.match(letterNumber)) {
	    return false;
	} else {
	    return true;
	}
    }


    // Function to add extra zeros infront of numbers (used for the countdown)
    // via http://stackoverflow.com/a/6466243
    function pad (str, max) {
	return str.length < max ? pad("0" + str, max) : str;
    }

    // Function for encoding and decoding URLs
    // via http://meyerweb.com/eric/tools/dencoder/
    function encode(unencoded) {
	return encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");
    }
    function decode(encoded) {
	return decodeURIComponent(encoded.replace(/\+/g,  " "));
    }


    // Simple Countdown
    // via http://davidwalsh.name/jquery-countdown-plugin
    jQuery.fn.countDown = function(settings,to) {
	settings = jQuery.extend({
	    startFontSize: "12px",
	    endFontSize: "12px",
	    duration: 1000,
	    startNumber: 10,
	    endNumber: 0,
	    callBack: function() { }
	}, settings);
	return this.each(function() {
	    if(!to && to != settings.endNumber) { to = settings.startNumber; }
	    jQuery(this).children('.secs').text(to);
	    jQuery(this).animate({
		fontSize: settings.endFontSize
	    }, settings.duration, "", function() {
		if(to > settings.endNumber + 1) {
		    jQuery(this).children('.secs').text(to - 1);
		    jQuery(this).countDown(settings, to - 1);
		    var minutes = Math.floor(to / 60);
		    var seconds = to - minutes * 60;
		    jQuery(this).children('.cntr').text(pad(minutes.toString(),2) + ':' + pad(seconds.toString(),2));
		}
		else {
		    settings.callBack(this);
		}
	    });
	});
    };

    // Prevent that participants accidentally exit the experiment by
    // disabling F5 and backspace keys
    shortcut.add("f5",function() {});
    $(window).bind('beforeunload', function(){
	return 'Are you sure you want to quit the experiment completely?';
    });

    // Set Settings, get Participant No. and Condition No.
    set_settings();
    get_params();
    adjust_to_condition();

    // Start with the intro slide
    init_intro();

});
