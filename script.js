(function() {

	var debugging = false;
	var linebreakClassname = 'tweet-display-linebreaks';
	var linebreakObject = document.querySelector('.' + linebreakClassname);

	var debug = function(value) {
		if ( debugging ) {
			console.log(value);
		}
	}
	
	var rmClassname = function(el, className) {
		if ( -1 !== el.className.indexOf(className) ) {
			el.className = el.className.replace(new RegExp('\s*' + className + '\s*'), '');
			debug('Removed class "' + className + '"');
		} else {
			debug('No class "' + className + '". Nothing to do');
		}
	};
	
	rmClassname(linebreakObject, linebreakClassname);

	var observer = new WebKitMutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (mutation.attributeName == 'class') {
				rmClassname(linebreakObject, linebreakClassname);
			}
		});
	});
	observer.observe(linebreakObject, { attributes: true });
})();