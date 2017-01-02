/*

*/

(function ($) {
  'use strict';
  var html = document.getElementsByTagName("html")[0];
  if(html.className == "no-js") {
      html.className = html.className.replace("no-js", "js"); // user has JS enabled
  } 
}(jQuery));

/*
  Navigation
*/

(function ($) {
	'use strict';

	var toggle = document.getElementById('nav-toggle'),
		nav = document.getElementById('nav-main');

	toggle.addEventListener('click', function () {
		document.body.classList.toggle('nav-is-open');
	});

	//if (document.body.classList.contains('nav-is-open')) {
		$(nav).mouseleave(function () {
			document.body.classList.toggle('nav-is-open');
		});
	//}

	// smoothState

	var options = {
			prefetch: true,
			cacheLength: 2,
			debug: true,
			onStart: {
				duration: 250, // Duration of our animation
				render: function ($container) {
					// Add your CSS animation reversing class
					$container.addClass('is-exiting');

					// Restart your animation
					smoothState.restartCSSAnimations();
				}
			},
			onReady: {
				duration: 0,
				render: function ($container, $newContent) {
					// Remove your CSS animation reversing class
					$container.removeClass('is-exiting');

					// Inject the new content
					$container.html($newContent);

				}
			}
		},
		smoothState = $('#main').smoothState(options).data('smoothState');

	$('.menu-item a').click(function (e) {
		e.preventDefault();
		var content = $('#main').smoothState().data('smoothState'),
		href = $(this).attr('href');
		content.load(href);
	});


}(jQuery));

/*
  UI
*/

(function ($) {
  'use strict';

  $(document).ready(function(){
    // masonry
    $('#work-feed').masonry();
    
    // preloader animation
    $('#preloader').addClass('loaded');

    // transitioner panels here w/ delay
    window.setTimeout(function(){ $('#preloader').addClass('hidden'); },1500);

  });


}(jQuery));