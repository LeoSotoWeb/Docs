var populateWindow = function(link) {
	$.get(here + 'docs/' + link, function(response) {
		$('#docwin').html(marked(response));
	});

	$('.nav-list li').each(function(item) {
		if (item.find('a').length == 0) {
			item.addClass('nav-header');
		}
	});

	$('.nav-list a').each(function(item, index) {
		if (link == item.get('href'))
		{
			item.parents('li').addClass('active');
		}
		else
		{
			item.parents('li').removeClass('active');
		}		
	});
}

var populateMenu = function() {
	$.get(here + 'docs/menu.md', function (response) {
		$('#doc-menu').html(marked(response));
		$('#doc-menu ul').each(function(el) {
			el.addClass('nav');
			el.addClass('nav-list');
		});

		$('.nav-list li').each(function(item) {
			if (item.find('a').length == 0) {
				item.addClass('nav-header');
			}
		});
	})
}

$(document).ready(function(){
	var urlParts = document.URL.split('?', 2);
	state = {};
	here = urlParts[0];

	if (urlParts.length > 1) {
		var currentDoc = urlParts[1];
	} else {
		var currentDoc = "introduction.md";
	}

	marked.setOptions({
		gfm: true,
		pedantic: false,
		sanitize: false,
		highlight: function(code, lang) {
			var that;
			Rainbow.color(code, lang, function(hl_code) { that = hl_code; });
			return that;
		}
	})
	populateMenu();
	populateWindow(currentDoc);

	$('#main a').click(function(e){
		var target = $(this);
		if (target.attr('href').substring(0, 4) != 'http' && target.attr('href').substring(0, 1) != '#') {
			populateWindow(target.attr('href'));
			e.preventDefault();
			history.pushState(state, target.attr('href'), "?" + target.attr('href'));
		}
	});
});