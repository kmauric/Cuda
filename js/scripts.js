$(function() {
	
	new WOW().init();
	
$(window).scroll(function (event) {
   	var scrolly = $(window).scrollTop();
		  
	if ((scrolly > 1800) && (scrolly < 2400)) {
		$("#web-design-circle").circleProgress({
			value: 0.9,
			size: 160,
			startAngle: -Math.PI / 2,
			fill: {
				color: "#30bae7"
			}
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('.percentile-radius').html(parseInt(90 * progress) + '<i>%</i>');

		}); //end #web-design-circle progress


		$("#html-css-circle").circleProgress({
			value: 0.75,
			size: 160,
			startAngle: -Math.PI / 2,
			fill: {
				color: "#d74680"
			}
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('.percentile-radius').html(parseInt(75 * progress) + '<i>%</i>');

		}); //end #html-css-circle progress

		$("#graphic-design-circle").circleProgress({
			value: 0.7,
			size: 160,
			startAngle: -Math.PI / 2,
			fill: {
				color: "#15c7a8"
			}
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('.percentile-radius').html(parseInt(70 * progress) + '<i>%</i>');

		}); //end #graphic-design-circle progress

		$("#ux-circle").circleProgress({
			value: 0.85,
			size: 160,
			startAngle: -Math.PI / 2,
			fill: {
				color: "#eb7d4b"
			}
		}).on('circle-animation-progress', function (event, progress) {
			$(this).find('.percentile-radius').html(parseInt(85 * progress) + '<i>%</i>');

		}); //end ux-circle progress
} // if (scrolly > 2200)
		 
    }); //$(window).scroll()
	

}); //end jQuery
