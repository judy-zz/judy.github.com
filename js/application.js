$(document).ready(function() {
	sliders = [];
	sliders.push(
		new Slider($('#lifeviz')).setPhotos([
	  		{ "src" : "img/lifeviz01.jpg", "name": "Homepage" }
		])
	);
	sliders.push(
		new Slider($('#redi')).setPhotos([
	  		{ "src" : "img/redi01.jpg", "name": "Homepage" }
		])
	);
	sliders.push(
		new Slider($('#bus')).setPhotos([
	  		{ "src" : "img/bus01.jpg", "name": "Homepage" },
	  		{ "src" : "img/bus02.jpg", "name": "Listing all of the buses" },
	  		{ "src" : "img/bus03.jpg", "name": "Charting selected buses by GVWR" },
	  		{ "src" : "img/bus04.jpg", "name": "Viewing an individual bus" }
		])
	);
	sliders.push(
		new Slider($('#captcha')).setPhotos([
	  		{ "src" : "img/captcha01.jpg", "name": "How it works" },
	  		{ "src" : "img/captcha02.jpg", "name": "Homepage" }
		])
	);
	sliders.push(
		new Slider($('#cat')).setPhotos([
	  		{ "src" : "img/cat01.jpg", "name": "Homepage" },
	  		{ "src" : "img/cat02.jpg", "name": "Signing up for a bowl game" }
		])
	);
	sliders.push(
		new Slider($('#coolblue')).setPhotos([
	  		{ "src" : "img/coolblue01.jpg", "name": "Homepage" },
	  		{ "src" : "img/coolblue02.jpg", "name": "Product Details" }
		])
	);

	_.each(sliders, function(slider) {
		slider.setSize(700, 300).setTheme('theme-light').stop();
	});
});
