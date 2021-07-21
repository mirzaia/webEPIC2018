/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

$(document).ready(function(){

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: -10
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				expandMode: (skel.vars.mobile ? 'click' : 'hover')
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		1,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

	var epic_ipcc_inner = $('#banner > .epic_ipcc_inner');

	var sponsor_inner = $('#banner > .sponsor_inner');

	//var announce_inner = $('#banner > .announce_inner');

	//$("#myCarousel2").carousel({interval: 5000, pause: false});

	//$("#myCarousel2").on('slide.bs.carousel', function() {

	//	if($(epic_ipcc_inner).hasClass("ipcc2Show")){
			 //$('#banner > .epic_ipcc_inner').removeClass("ipccShow").remove();
			// $('#banner > .sponsor_inner').css('display', 'block');
	//	 }


//	else if(($('#banner > .announce_inner').css("display")) === "block"){
		//	$('#banner > .announce_inner').css("display", "none");
		//	$(epic_ipcc_inner).find('header').html("<h2>IPCC 2018</h2>");
		//	$(epic_ipcc_inner).find('p').html("International Process </br>Control Competition");
		//	$(epic_ipcc_inner).find('a').attr("href", "ipcc.html#main");
		//	$(epic_ipcc_inner).addClass("ipcc2Show");
		//	$('#banner').append(epic_ipcc_inner);
		//}
    
	//}


	$("#myCarousel").carousel({interval: 5000, pause: false});

	$("#myCarousel").on('slide.bs.carousel', function () {

		if($(epic_ipcc_inner).hasClass("epicShow")){
			$('#banner > .epic_ipcc_inner').removeClass("epicShow").remove();
			$(epic_ipcc_inner).find('header').html("<h2>IPCC 2018</h2>");
			$(epic_ipcc_inner).find('p').html("International Process </br>Control Competition");
			$(epic_ipcc_inner).find('a').attr("href", "ipcc.html#main");
			$(epic_ipcc_inner).addClass("ipccShow");
			$('#banner').append(epic_ipcc_inner);
		}

		else if($(epic_ipcc_inner).hasClass("ipccShow")){
			$('#banner > .epic_ipcc_inner').removeClass("ipccShow").remove();
			$('#banner > .sponsor_inner').css('display', 'block');
		}

		else if(($('#banner > .sponsor_inner').css("display")) === "block"){
			$('#banner > .sponsor_inner').css("display", "none");
			$(epic_ipcc_inner).find('header').html("<h2>EPIC 2018</h2>");
			$(epic_ipcc_inner).find('p').html("Engineering Physics </br>International Conference");
			$(epic_ipcc_inner).find('a').attr("href", "index.html#main");
			$(epic_ipcc_inner).addClass("epicShow");
			$('#banner').append(epic_ipcc_inner);
		}
    
    });
});