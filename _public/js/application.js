$(document).ready(function() {
	var lifeviz_slider = new Slider($('#lifeviz'));
	var redi_slider = new Slider($('#redi'));
	var bus_slider = new Slider($('#bus'));
	var captcha_slider = new Slider($('#captcha'));
	var cat_slider = new Slider($('#cat'));
	var coolblue_slider = new Slider($('#coolblue'));
	lifeviz_slider.setPhotos([
	  { "src" : "img/lifeviz01.jpg", "name": "Homepage" }
	]);
	redi_slider.setPhotos([
	  { "src" : "img/redi01.jpg", "name": "Homepage" }
	]);
	bus_slider.setPhotos([
	  { "src" : "img/bus01.jpg", "name": "Homepage" },
	  { "src" : "img/bus02.jpg", "name": "Listing all of the buses" },
	  { "src" : "img/bus03.jpg", "name": "Charting selected buses by GVWR" },
	  { "src" : "img/bus04.jpg", "name": "Viewing an individual bus" }
	]);
	captcha_slider.setPhotos([
	  { "src" : "img/captcha01.jpg", "name": "How it works" },
	  { "src" : "img/captcha02.jpg", "name": "Homepage" }
	]);
	cat_slider.setPhotos([
	  { "src" : "img/cat01.jpg", "name": "Homepage" },
	  { "src" : "img/cat02.jpg", "name": "Signing up for a bowl game" }
	]);
	coolblue_slider.setPhotos([
	  { "src" : "img/coolblue01.jpg", "name": "Homepage" },
	  { "src" : "img/coolblue02.jpg", "name": "Product Details" }
	]);
	lifeviz_slider.setSize(700, 300);
	redi_slider.setSize(700, 300);
	bus_slider.setSize(700, 300);
	captcha_slider.setSize(700, 300);
	cat_slider.setSize(700, 300);
	coolblue_slider.setSize(700, 300);
	lifeviz_slider.setTheme('theme-light');
	redi_slider.setTheme('theme-light');
	bus_slider.setTheme('theme-light');
	captcha_slider.setTheme('theme-light');
	cat_slider.setTheme('theme-light');
	coolblue_slider.setTheme('theme-light');
	lifeviz_slider.css("transition-duration", 3000);
	redi_slider.css("transition-duration", 2500);
	bus_slider.css("transition-duration", 1500);
	captcha_slider.css("transition-duration", 2000);
	cat_slider.css("transition-duration", 2300);
	coolblue_slider.css("transition-duration", 2600);
	bus_slider.setTransition('transition-rotatezoomin');
	captcha_slider.setTransition('transition-rotatezoomin');
	cat_slider.setTransition('transition-rotatezoomin');
	coolblue_slider.setTransition('transition-rotatezoomin');
});
