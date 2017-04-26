/*
    radialIndicator.js v 1.3.1
    Author: Sudhanshu Yadav
    Copyright (c) 2015 Sudhanshu Yadav - ignitersworld.com , released under the MIT license.
    Demo on: ignitersworld.com/lab/radialIndicator.html
*/
!function(t){var e=Function("return this")()||(42,eval)("this");"function"==typeof define&&define.amd?define(["jquery"],function(n){return e.radialIndicator=t(n,e)}):"object"==typeof module&&module.exports?module.exports=e.document?t(require("jquery"),e):function(e){if(!e.document)throw new Error("radialIndiactor requires a window with a document");return t(require("jquery")(e),e)}:e.radialIndicator=t(e.jQuery,e)}(function(t,e,n){function r(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,n,r){return e+e+n+n+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:null}function i(t,e,n,r){return Math.round(n+(r-n)*t/e)}function a(t,e,n,a,o){var u=-1!=o.indexOf("#")?r(o):o.match(/\d+/g),l=-1!=a.indexOf("#")?r(a):a.match(/\d+/g),s=n-e,c=t-e;return u&&l?"rgb("+i(c,s,l[0],u[0])+","+i(c,s,l[1],u[1])+","+i(c,s,l[2],u[2])+")":null}function o(){for(var t=arguments,e=t[0],n=1,r=t.length;r>n;n++){var i=t[n];for(var a in i)i.hasOwnProperty(a)&&(e[a]=i[a])}return e}function u(t){return function(e){if(!t)return e.toString();e=e||0;for(var n=e.toString().split("").reverse(),r=t.split("").reverse(),i=0,a=0,o=r.length;o>i&&n.length;i++)"#"==r[i]&&(a=i,r[i]=n.shift());return r.splice(a+1,r.lastIndexOf("#")-a,n.reverse().join("")),r.reverse().join("")}}function l(t,e){function n(t){if(e.interaction){t.preventDefault();var n=-Math.max(-1,Math.min(1,t.wheelDelta||-t.detail)),i=null!=e.precision?e.precision:0,a=Math.pow(10,i),o=e.maxValue-e.minValue,u=r.current_value+Math.round(a*n*o/Math.min(o,100))/a;return r.value(u),!1}}var r=this;e=e||{},e=o({},s.defaults,e),this.indOption=e,"string"==typeof t&&(t=c.querySelector(t)),t.length&&(t=t[0]),this.container=t;var i=c.createElement("canvas");t.appendChild(i),this.canElm=i,this.ctx=i.getContext("2d"),this.current_value=e.initValue||e.minValue||0;var a=function(t){if(e.interaction){var n="touchstart"==t.type?"touchmove":"mousemove",a="touchstart"==t.type?"touchend":"mouseup",o=i.getBoundingClientRect(),u=o.top+i.offsetHeight/2,l=o.left+i.offsetWidth/2,s=function(t){t.preventDefault();var n=t.clientX||t.touches[0].clientX,i=t.clientY||t.touches[0].clientY,a=(h+d+Math.atan2(i-u,n-l))%(h+.0175),o=e.radius-1+e.barWidth/2,s=h*o,c=null!=e.precision?e.precision:0,f=Math.pow(10,c),v=Math.round(f*a*o*(e.maxValue-e.minValue)/s)/f;r.value(v)},f=function(){c.removeEventListener(n,s,!1),c.removeEventListener(a,f,!1)};c.addEventListener(n,s,!1),c.addEventListener(a,f,!1)}};i.addEventListener("touchstart",a,!1),i.addEventListener("mousedown",a,!1),i.addEventListener("mousewheel",n,!1),i.addEventListener("DOMMouseScroll",n,!1)}function s(t,e){var n=new l(t,e);return n._init(),n}var c=e.document,h=2*Math.PI,d=Math.PI/2,f=function(){var t=c.createElement("canvas").getContext("2d"),n=e.devicePixelRatio||1,r=t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1,i=n/r;return function(t,e,n){var r=n||c.createElement("canvas");return r.width=t*i,r.height=e*i,r.style.width=t+"px",r.style.height=e+"px",r.getContext("2d").setTransform(i,0,0,i,0,0),r}}();return l.prototype={constructor:s,_init:function(){var t=this.indOption,e=this.canElm,n=(this.ctx,2*(t.radius+t.barWidth));return this.formatter="function"==typeof t.format?t.format:u(t.format),this.maxLength=t.percentage?4:this.formatter(t.maxValue).length,f(n,n,e),this._drawBarBg(),this.value(this.current_value),this},_drawBarBg:function(){var t=this.indOption,e=this.ctx,n=2*(t.radius+t.barWidth),r=n/2;e.strokeStyle=t.barBgColor,e.lineWidth=t.barWidth,"transparent"!=t.barBgColor&&(e.beginPath(),e.arc(r,r,t.radius-1+t.barWidth/2,0,2*Math.PI),e.stroke())},value:function(t){if(t===n||isNaN(t))return this.current_value;t=parseFloat(t);var e=this.ctx,r=this.indOption,i=r.barColor,o=2*(r.radius+r.barWidth),u=r.minValue,l=r.maxValue,s=o/2;t=u>t?u:t>l?l:t;var c=null!=r.precision?r.precision:0,f=Math.pow(10,c),v=Math.round((t-u)*f/(l-u)*100)/f,m=r.percentage?v+"%":this.formatter(t);if(this.current_value=t,e.clearRect(0,0,o,o),this._drawBarBg(),"object"==typeof i)for(var p=Object.keys(i),g=1,x=p.length;x>g;g++){var b=p[g-1],y=p[g],C=i[b],M=i[y],w=t==b?C:t==y?M:t>b&&y>t?r.interpolate?a(t,b,y,C,M):M:!1;if(0!=w){i=w;break}}if(e.strokeStyle=i,r.roundCorner&&(e.lineCap="round"),e.beginPath(),e.arc(s,s,r.radius-1+r.barWidth/2,-d,h*v/100-d,!1),e.stroke(),r.displayNumber){var B=e.font.split(" "),I=r.fontWeight,V=r.fontSize||o/(this.maxLength-(Math.floor(1.4*this.maxLength/4)-1));B=r.fontFamily||B[B.length-1],e.fillStyle=r.fontColor||i,e.font=I+" "+V+"px "+B,e.textAlign="center",e.textBaseline=r.textBaseline,e.fillText(m,s,s)}return r.onChange.call(this.container,t),this},animate:function(t){var e=this.indOption,n=this.current_value||e.minValue,r=this,i=e.minValue,a=e.maxValue,o=e.frameNum||(e.percentage?100:500),u=null!=e.precision?e.precision:Math.ceil(Math.log(a-i/o)),l=Math.pow(10,u),s=Math.round((a-i)*l/o)/l;t=i>t?i:t>a?a:t;var c=n>t;return this.intvFunc&&clearInterval(this.intvFunc),this.intvFunc=setInterval(function(){if(!c&&n>=t||c&&t>=n){if(r.current_value==n)return clearInterval(r.intvFunc),void(e.onAnimationComplete&&e.onAnimationComplete(r.current_value));n=t}r.value(n),n!=t&&(n+=c?-s:s)},e.frameTime),this},option:function(t,e){return e===n?this.option[t]:(-1!=["radius","barWidth","barBgColor","format","maxValue","percentage"].indexOf(t)&&(this.indOption[t]=e,this._init().value(this.current_value)),void(this.indOption[t]=e))}},s.defaults={radius:50,barWidth:5,barBgColor:"#eeeeee",barColor:"#99CC33",format:null,frameTime:10,frameNum:null,fontColor:null,fontFamily:null,fontWeight:"bold",fontSize:null,textBaseline:"middle",interpolate:!0,percentage:!1,precision:null,displayNumber:!0,roundCorner:!1,minValue:0,maxValue:100,initValue:0,interaction:!1,onChange:function(){}},e.radialIndicator=s,t&&(t.fn.radialIndicator=function(e){return this.each(function(){var n=s(this,e);t.data(this,"radialIndicator",n)})}),s});


/*
*
*
*

v3 SCRIPT

	voc-widget.js v 3.1.1
	Author: Timothy Kinzer
	Copyright (c) 2017 Timothy Kinzer - timothykinzer.com , NOT RELEASED UNDER THE MIT LICENSE.
	Demo on: http://timothykinzer.com/public/test/widget-sidbar.html

*
*
*
*/

//MAIN
$().ready(
	function(ev)
	{
		let tempClientID = 302;
		//  pull client id from window 
		if(window.clientID !== null && window.clientID != undefined)
		{
		// if yes
			
			tempClientID = window.clientID;
			getListReviews(tempClientID);
		}
		// check if there is a client ID within the IFRAME src
		else 
		{
			let clientCheck = false;
			//GET iframe attribute 'sv-data-clientid'
			//IF valid value for 'sv-data-client-id'
				//SET clientCheck to TRUE 

			if (clientCheck) 
			{
			// if yes
				//split the iframe.src string at the 'client' param following a split on '/?'
				//set tempClientID = value of 'client'
				//check if the clientID is valid and NOT: null, empty, undefined, or fake
				getListReviews(tempClientID);	
			} 
			else
			{
			//else no
				getListReviews(tempClientID);
			}
		}

	}
);

const numReviewsViewed = 0;
let reviewCounter = 0;

//EVENTS
$('#sv-sidebar-widget-btn').click(function(evClick)
{
	openSidebar();
});

//#sv-menu-logo
$('#sv-menu-logo').click(function(evClick)
{
	window.open('https://www.subscribervoice.com/','_blank');
});

//ACTIONS
function openSidebar()
{
	$('#sv-sidebar-widget-btn').removeClass('visible');
	$('#sv-sidebar-widget-btn').addClass('hidden');
	//Handle Overlay
	$('#page-overlay').removeClass('hidden');
	$('#page-overlay').addClass('visible');
	//Handle Close
	$('.sidebar-close').removeClass('hidden');
	$('.sidebar-close').addClass('visible');

	$('#widget-container').removeClass('hidden');
	$('#widget-container').addClass('visible');
	
	//Handle Sidebar
	// $('#sidebar-container').removeClass('hidden');
	// $('#sidebar-container').addClass('visible');
}
function closeSidebar()
{
	$('#sv-sidebar-widget-btn').addClass('visible');
	$('#sv-sidebar-widget-btn').removeClass('hidden');
	//Handle Overlay
	$('#page-overlay').addClass('hidden');
	$('#page-overlay').removeClass('visible');
	//
	$('#widget-container').addClass('hidden');
	$('#widget-container').removeClass('visible');
	//
	$('.sidebar-close').addClass('hidden');
	$('.sidebar-close').removeClass('visible');
	//Handle Sidebar
	// $('#sidebar-container').addClass('hidden');
	// $('#sidebar-container').removeClass('visible');
}


//METHODS

//API Request: Get the reviews for this clientID
//url: 
function getListReviews( clientID )
{
	//https, www.
	var envFLAG = "development";
	let envProtocol = 'http://qa.';
	switch(envFLAG)
	{
		case "development":
			envProtocol = 'http://qa.';
		break
		case "staging":
			envProtocol = 'https://qa.';
		break;
		case "testing":
			envProtocol = 'https://qa.';
		break;
		case "production":
			envProtocol = 'https://www.';
		break;
		default:
			envProtocol = 'http://';
		break;
	}
		

	//SETUP URL
	var apiURL = envProtocol + 
					'subscribervoice.com/get-client-reviews/?uniqueClientIdentifier=' + 
					clientID +
					'&numberOfReviewsToReturn=5';

	//Link to View More HREF
	$('#sv-sidebar-widget-btn').attr('href','https://subscribervoice.com/reviews/' + clientID + "/");
	 
	//apiURL += '?uniqueClientIdentifier=1&numberOfReviewsToReturn=5&startIndex=0';
	var apiReviews = $.ajax({
		url : apiURL,
		contentType : 'application/json',
		crossDomain : true,
		method : 'GET',
	})
	.done(function(result){
		console.log("API Returned from get List of Reviews: ",result);
		var tempReviewList = null;
		var tempReviewClient = null;
		if(result !== undefined && result !== null)
		{
			//v1
			tempReviewList = result.reviews;

			//V2
			// tempReviewList = result.reviews;
			tempReviewClient = result.clientData;
			reviewCounter = result.reviewIndex;

			addListReviews(tempReviewList);
			//addClient(tempReviewClient);

			//update client
			addClient(tempReviewClient);

			var reviewScore = result.clientData.clientReviewsScore;
			$('#indicatorContainer').radialIndicator({
		        barColor: '#4192B6',
		        barWidth: 5,
		        initValue: reviewScore,
		        maxValue: 5,
		        minValue: 0,
		        roundCorner : true,
		        percentage: false,
		        displayNumber: false,
		        //format
		        radius: 60

		    });

		}
		else
		{
			addListReviews("dev");
			addClient(null);
		}
	})
	.fail(function(ev){
		console.log("Request to API failed on request or is missing a response",ev);
		addListReviews("dev");
		addClient(null);
	});
}

//add client details
function addClient( client )
{
	let tempRating = 0;
	let tempLogo = "";
	var tempTitle = "Client's Name";
	var tempReviewTotal = " - ";
	var tempClientProfile = "";

	if( client != undefined && client != null)
	{
		//update client details
		tempTitle = client.clientName;
		tempLogo = client.clientLogoURL;
		tempRating = client.clientReviewsScore;
		tempReviewTotal = client.clientReviewsTotal;
		tempClientProfile = client.clientURL;
	}
	//title #client-title
		//document.getElementById('client-title-link').setAttribute('href',tempClientProfile);
		//document.getElementById('client-title').innerText = tempTitle;
		//score
		//review stars
		var divScore = document.createElement('div');
		divScore.className = "text-center";
		divScore.setAttribute("style","width:100%;margin-bottom:10px;");
		//loop: add class to use a filled star X times rounded to the next smallest number ALWAYS
		var counter = 0;
		while( counter < tempRating)
		{
			var starbox = document.createElement('div');
			starbox.className += "client-star-box";

			var star = document.createElement('div');
			star.className = "star-filled client-star";

			starbox.append(star);
			divScore.append(starbox);
			counter++;
		}

		while( counter < 5)
		{
			var starbox = document.createElement('div');
			starbox.className += "client-star-box";

			var starEmpty = document.createElement('div');
			starEmpty.className = "star-empty client-star";

			starbox.append(starEmpty);
			divScore.append(starbox);
			counter++;
		}
		document.getElementById('client-rating').appendChild(divScore);
		//stars score
		document.getElementById('client-rating-value').innerText = tempRating;
		//number reviews
		document.getElementById('client-reviews-total').innerText = tempReviewTotal;

}

//add single review
function addSingleReview ( review )
{
	//create DOM and update info
	//Create Container
	//Add Header Title
	//Add Review Score
	//Add Review Text
	//Add Review Datetime

	//update counter for which review this is
	reviewCounter++;

	//Create Single Review Object to Add to Sidebar Content Container
	var reviewContainer = document.createElement('div');
	reviewContainer.className += "review-container col-md-12 col-xs-12";
	reviewContainer.setAttribute("id","review-" + reviewCounter);

	var reviewHeader = document.createElement('div');
	reviewHeader.className = "review-header-div col-md-12 col-xs-12";

	var reviewTitle = document.createElement('h4');
	reviewTitle.className += "review-title";
	reviewTitle.setAttribute("style","text-decoration:bold;");
	reviewTitle.innerText = review.sender;

	reviewHeader.append(reviewTitle);

	var reviewScore = document.createElement('div');
	reviewScore.className = "review-rating col-md-12 col-xs-12 text-center";
	reviewScore.setAttribute("style","width:100%;margin-bottom:10px;");
	//loop: add class to use a filled star X times rounded to the next smallest number ALWAYS
	var counter = 0;
	while( counter < review.rating)
	{
		var starbox = document.createElement('div');
		starbox.className += "review-star-box";

		var star = document.createElement('div');
		star.className = "star-filled-review review-star";

		starbox.append(star);
		reviewScore.append(starbox);
		counter++;
	}

	while( counter < 5)
	{
		var starbox = document.createElement('div');
		starbox.className += "review-star-box";

		var starEmpty = document.createElement('div');
		starEmpty.className = "star-empty-review review-star";

		starbox.append(starEmpty);
		reviewScore.append(starbox);
		counter++;
	}
	reviewHeader.append(reviewScore);

	//reviewScore.innerHTML += "<div class='help-text review-stars-text  col-md-12 col-xs-12'>" + review.rating + " out of 5 Stars</div>";

	var reviewTextHeader = document.createElement('p');
	reviewTextHeader.className += "review-comment-header";
	reviewTextHeader.setAttribute("id","comment-header-" + reviewCounter)
	if(review.comments.indexOf(" ") > 20 || review.comments.indexOf(" ") == -1)
	{
		reviewTextHeader.className += " review-text-long";
	}
	reviewTextHeader.innerText = review.comments.substring(0,32) + "...";

	var reviewTextContainer = document.createElement('div');
	reviewTextContainer.className = "review-text lead";
	if(review.comments.indexOf(" ") > 20 || review.comments.indexOf(" ") == -1)
	{
		reviewTextContainer.className += " review-text-long";
	}

	var reviewTextP = document.createElement('p');
	reviewTextP.innerText = review.comments;
	reviewTextP.className += "review-comment-p";

	reviewTextContainer.append(reviewTextP);

	var reviewDate = document.createElement('span');
	reviewDate.className += "review-date";
	reviewDate.innerText = "Posted " + formatDatestamp(review.timestamp);

	reviewTitle.append(reviewDate);

	//Add Elements into Parent Containers
	reviewContainer.append(reviewHeader);	
	//reviewContainer.append(reviewTextHeader);
	reviewContainer.append(reviewTextContainer);
	

	//ADD Review to Sidebar Content
	document.getElementById('client-content').prepend(reviewContainer);

}

//add list of reviews
//@param: array of review objects
function addListReviews( reviews )
{

	if(reviews !== null && reviews !== undefined && reviews !== "dev")
	{
		if(reviews.length !== 0 && reviews.length !== null)
		{
			var ticker = 0;
			while(ticker < 5 && ticker < reviews.length)
			{
				var tempReview = reviews[ticker];
				console.log(ticker + ": ",tempReview);
				addSingleReview(tempReview);
				ticker++;
			}
		}
		else
		{
			document.getElementById('client-content').innerText = "Problem Loading Reviews..."
		}
	}
	else
	{
		var demoReview = 
		{
			sender : "Patrick Harris",
			rating : 4,

			comments : "This is my second review about this company, and I JUST LOVE THEM!!! OMG",
			timestamp: "2017-03-30T00:31:12.770038+00:00"
		};
		var demoReview2 = 
		{
			sender : "Tim",
			rating : 3,
			comments : "This is my second review about this company, and I JUST LOVE THEM!!! OMG. This is my second review about this company, and I JUST LOVE THEM!!! OMG. This is my second review about this company, and I JUST LOVE THEM!!! OMG.",
			timestamp : "2017-03-30T00:31:12.770038+00:00"
		};
		//DEFAULT
		addSingleReview(demoReview);
		addSingleReview(demoReview2);
		addSingleReview(demoReview);
		addSingleReview(demoReview);
		addSingleReview(demoReview);

	}
}

function formatDatestamp( tempDate )
{
	var date = new Date(tempDate);
	
	return date.toDateString();
}

function formatTimestamp( tempDate )
{

	var date = new Date(tempDate).getTime();
	console.log("formatted Date: " + date);

	var seconds = Math.floor((new Date() - date) / 1000);
	console.log("Number of seconds since post: " + seconds);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}