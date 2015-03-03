chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
	    // ----------------------------------------------------------
		
	    FindPasswordBox();
	}
	}, 10);

	setInterval(function () {
	    if (document.readyState === "complete") {
	        if (document.location.href === "https://twitter.com/following") {
	            SearchReader();
	        }
	    }
	}, 10);
});

function FindPasswordBox() {
    var passwordBox = $("input:password");

    passwordBox.css({
        background: "yellow",
        border: "2px red solid"
    });
    //passwordBox.val("TEST");
}

function SearchReader() {
    var readers = $(".ProfileCard-screenname");
    readers.each(function () {
        if ($(this).children().next().attr('class') !== "FollowStatus") {
            $(this).css({
                background: "yellow",
                border: "2px red solid"
            });
        }
    });
    
}