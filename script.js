(function() {

	var newlineStyleId = 'disable-twitter-newlines',
		cssText = '#page-container .expanding-stream-item .tweet:not(.opened-tweet) .js-tweet-text{ white-space: normal; } ';
	
	if ( !document.querySelector( '#' + newlineStyleId ) ) {
		var el = document.createElement('style');
		el.id = newlineStyleId;
		el.type = 'text/css';
		el.appendChild(document.createTextNode(cssText));
		document.querySelector('head').appendChild(el);
	}
})();