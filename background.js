chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		var a = document.createElement('a');
		a.href = details.url;
		domain = a.hostname;
		if ( a.hostname.indexOf("www.") == 0 ){
			domain = domain.replace(/([a-zA-Z0-9]+.)/,"");
		}
		if ( axel.indexOf( domain ) != -1 ){
			return {
				redirectUrl : "chrome-extension://"+window.location.hostname+"/html/block.html"
			};
		}
	},{
		urls: ["<all_urls>"]
	},["blocking"]
);