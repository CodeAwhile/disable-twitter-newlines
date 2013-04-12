(function() {

	var debugging = false,
		newlineStyleId = 'disable-twitter-newlines',
		cssText = '#page-container .tweet .js-tweet-text{ white-space: normal; }';

	var debug = function(value) {
		if ( debugging ) {
			console.log(value);
		}
	}
	
	// Name this function in case it ever needs to be called multiple times
	var maybeAddCSS = function() {
		if ( !document.querySelector( '#' + newlineStyleId ) ) {
			var styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.appendChild(document.createTextNode(cssText));
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(styleElement);
		}
	}
	
	maybeAddCSS();
})();