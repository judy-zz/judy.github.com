$(function(){

    /*-------------------------------------------------------------------*/
    /*  1. Preloader. Requires jQuery jpreloader plugin.
    /*-------------------------------------------------------------------*/
    $(document).ready(function() {
        if ($.fn.jpreLoader){
            $('body').jpreLoader({
                showPercentage: false,
                loaderVPos: '50%'
            });
        }
    });


    /*-------------------------------------------------------------------*/
    /*  2. Makes the height of all selected elements (".match-height")
    /*  exactly equal. Requires jQuery matchHeight plugin.
    /*-------------------------------------------------------------------*/
    $(window).smartload(function(){
        if ($.fn.matchHeight){
            $('.match-height').matchHeight();
        }
    });


    /*-------------------------------------------------------------------*/
    /*  3. Just did another hack of dropdown menu for Bootstrap scrollspy.
    /*-------------------------------------------------------------------*/
    $('body').on('activate.bs.scrollspy', function(){
        $('.page-scroll.dropdown > .dropdown-toggle').each(function(){
            $(this).attr('data-target', '#');
        });
    });


    /*-------------------------------------------------------------------*/
    /*  4. Page scrolling feature, requires jQuery Easing plugin.
    /*-------------------------------------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll > a').bind('click', function(e){
            e.preventDefault();

            var anchor = $(this),
            href = anchor.attr('href'),
            offset = $('body').attr('data-offset');

            $('html, body').stop().animate({
                scrollTop: $(href).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
        });
    };

    pageScroll();


    /*-------------------------------------------------------------------*/
    /*  5. Make navigation menu on your page always stay visible.
    /*  Requires jQuery Sticky plugin.
    /*-------------------------------------------------------------------*/
    var stickyMenu = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        nav = $('.navbar.navbar-fixed-top');

        if ($.fn.unstick){
            nav.unstick();
        }

        if ($.fn.sticky && ww >= 992){
            nav.sticky({topSpacing: 0});
        }
    };

    stickyMenu();

    // Call stickyMenu() when window is resized.
    $(window).smartresize(function(){
        stickyMenu();
    });


    /*-------------------------------------------------------------------*/
    /*  6. Navbar dropdown opening on hover,
    /*  and opening on click for collapsed navbar.
    /*-------------------------------------------------------------------*/
    var toggleNavbarMethod = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        dropdown = $('.navbar .dropdown');

        if (ww >= 992){
            dropdown.on('mouseover', function(){
                if (!$(this).hasClass('open')){
                    $(this).addClass('open');
                }
            }).on('mouseout', function(){
                if ($(this).hasClass('open')){
                    $(this).removeClass('open');
                }
            });
        }
        else {
            dropdown.off('mouseover').off('mouseout');
        }
    };

    toggleNavbarMethod();

    // Call toggleNavbarMethod(); when window is resized.
    $(window).smartresize(function(){
        toggleNavbarMethod();
    });


    /*-------------------------------------------------------------------*/
    /*  7. Prevent bootstrap dropdown closing when clicked.
    /*-------------------------------------------------------------------*/
    $('.dropdown-menu').click(function(e){
        e.stopPropagation();
    });


    /*-------------------------------------------------------------------*/
    /*  8. Automatically retract the navigation
    /*  when users click on a page for mobile.
    /*-------------------------------------------------------------------*/
    document.body.addEventListener('touchmove', function(){
        if (!$(this).is('.navbar-toggle') || !$(this).is('.navbar-collapse') ||
            !$(this).is('.dropdown-toggle') || !$(this).is('.page-scroll > a')){
            $('.berg-collapse').collapse('hide');
        }
    }, false);


    /*-------------------------------------------------------------------*/
    /*  9. Portfolio gallery. Requires jQuery Magnific Popup plugin.
    /*-------------------------------------------------------------------*/
    if ($.fn.magnificPopup){
        $('.portfolio').magnificPopup({
            delegate: 'a.zoom',
            type: 'image',
            fixedContentPos: false,

            // Delay in milliseconds before popup is removed
            removalDelay: 300,

            // Class that is added to popup wrapper and background
            mainClass: 'mfp-fade',

            gallery: {
                enabled: true,
                preload: [0,2],
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous Project',
                tNext: 'Next Project'
            }
        });
    }


    /*-------------------------------------------------------------------*/
    /*  10. Column Chart (Section - My Strenghts)
    /*-------------------------------------------------------------------*/
    var columnChart = function (){
        $('.column-chart').find('.item-progress').each(function(){
            var item = $(this);
            var newHeight = $(this).parent().height() * ($(this).data('percent') / 100);

            // Only animate elements when using non-mobile devices
            if (jQuery.browser.mobile === false){
                $('.column-chart').one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            height: newHeight
                        },1500);
                    }
                });
            }
            else{
                item.css('height', newHeight);
            }
        });
    };

    // Call columnChart() when window is loaded.
    $(window).smartload(function(){
        columnChart();
    });


    /*-------------------------------------------------------------------*/
    /*  11. Section - My Resume
    /*-------------------------------------------------------------------*/
    var resumeCollapse = function (){
        var ww = Math.max($(window).width(), window.innerWidth),
        workItem = $('.collapse:not(:first)', '#work'),
        educationItem = $('.collapse:not(:first)', '#education');

        if (ww < 768){
            workItem.collapse('show');
            educationItem.collapse('show');
        }
        else{
            workItem.collapse('hide');
            educationItem.collapse('hide');
        }
    };

    // Call resumeCollapse() when window is loaded.
    $(window).smartload(function(){
        resumeCollapse();
    });

    // Call resumeCollapse() when window is resized.
    $(window).smartresize(function(){
        resumeCollapse();
    });


    /*-------------------------------------------------------------------*/
    /*	12. References slider. Requires Flexslider plugin.
    /*-------------------------------------------------------------------*/
    $(window).smartload(function(){
        if ($.fn.flexslider){
            var flex = $('.flexslider.references');

            flex.flexslider({
                selector: ".slides > .item",
                manualControls: ".flex-control-nav li",
                directionNav : false,
                slideshowSpeed: 4000,
                after: function(slider){
                    if (!slider.playing) {
                        slider.play();
                    }
                }
            });
        }
    });

    $('a.flex-prev').on('click', function(e){
        e.preventDefault();
        $('.flexslider').flexslider('prev');
    });

    $('a.flex-next').on('click', function(e){
        e.preventDefault();
        $('.flexslider').flexslider('next');
    });


    /*-------------------------------------------------------------------*/
    /*  13. Circle Chart (Section - Skills & Expertise)
    /*-------------------------------------------------------------------*/
    var circleChart = function (){
        $('.circle-chart').find('.item-progress').each(function(){
            var item = $(this),
            maxHeight = 108,
            newHeight = maxHeight * ($(this).data('percent') / 100);

            // Only animate elements when using non-mobile devices
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            height: newHeight
                        },1500);
                    }
                });
            }
            else{
                item.css('height', newHeight);
            }
        });
    };

    // Call circleChart() when window is loaded.
    $(window).smartload(function(){
        circleChart();
    });


    /*-------------------------------------------------------------------*/
    /*  14. Bar Chart (Section - Knowledge)
    /*-------------------------------------------------------------------*/
    var barChart = function (){
        $('.bar-chart').find('.item-progress').each(function(){
            var item = $(this),
            percent = $(this).prev(),
            newWidth = $(this).parent().width() * ($(this).data('percent') / 100);

            // Only animate elements when using non-mobile devices
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            width: newWidth
                        },1500);

                        percent.animate({
                            left: newWidth - percent.width()
                        },1500);
                    }
                });
            }
            else{
                item.css('width', newWidth);
                percent.css('left', newWidth - percent.width());
            }
        });
    };

    // Call barChart() when window is loaded.
    $(window).smartload(function(){
        barChart();
    });

    // Call barChart() when window is resized.
    $(window).smartresize(function(){
        barChart();
    });


    /*-------------------------------------------------------------------*/
    /*  15. Milestones counter.
    /*-------------------------------------------------------------------*/
    var counter = function (){
        var number = $('.milestones').find('.number');

        if ($.fn.countTo){
            number.countTo({
                speed: 3000
            });
        }
    };

    if (jQuery.browser.mobile === false){
        var number = $('.milestones .number');

        number.one('inview', function(isInView) {
            if (isInView){
                counter();
            }
        });
    }
    else{
        counter();
    }

});

//
// (function() {
//
//     var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
//
//     // Main
//     initHeader();
//     initAnimation();
//     addListeners();
//
//     function initHeader() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         target = {x: width/2, y: height/2};
//
//         // largeHeader = document.getElementById('large-header');
//         // largeHeader.style.height = height+'px';
//
//         canvas = document.getElementById('demo-canvas');
//         // canvas.width = width;
//         // canvas.height = height;
//         ctx = canvas.getContext('2d');
//
//         // create points
//         points = [];
//         for(var x = 0; x < width; x = x + width/20) {
//             for(var y = 0; y < height; y = y + height/20) {
//                 var px = x + Math.random()*width/20;
//                 var py = y + Math.random()*height/20;
//                 var p = {x: px, originX: px, y: py, originY: py };
//                 points.push(p);
//             }
//         }
//
//         // for each point find the 5 closest points
//         for(var i = 0; i < points.length; i++) {
//             var closest = [];
//             var p1 = points[i];
//             for(var j = 0; j < points.length; j++) {
//                 var p2 = points[j];
//                 if(p1 !== p2) {
//                     var placed = false;
//                     for(var k = 0; k < 5; k++) {
//                         if(!placed) {
//                             if(closest[k] === undefined) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }
//
//                     for(var k = 0; k < 5; k++) {
//                         if(!placed) {
//                             if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
//                                 closest[k] = p2;
//                                 placed = true;
//                             }
//                         }
//                     }
//                 }
//             }
//             p1.closest = closest;
//         }
//
//         // assign a circle to each point
//         for(var i in points) {
//             var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
//             points[i].circle = c;
//         }
//     }
//
//     // Event handling
//     function addListeners() {
//         if(!('ontouchstart' in window)) {
//             window.addEventListener('mousemove', mouseMove);
//         }
//         window.addEventListener('scroll', scrollCheck);
//         window.addEventListener('resize', resize);
//     }
//
//     function mouseMove(e) {
//         var posx = 0;
//         var posy = 0;
//         if (e.pageX || e.pageY) {
//             posx = e.pageX;
//             posy = e.pageY;
//         }
//         else if (e.clientX || e.clientY)    {
//             posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//             posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//         }
//         target.x = posx;
//         target.y = posy;
//     }
//
//     function scrollCheck() {
//         if(document.body.scrollTop > height) animateHeader = false;
//         else animateHeader = true;
//     }
//
//     function resize() {
//         width = window.innerWidth;
//         height = window.innerHeight;
//         // largeHeader.style.height = height+'px';
//         canvas.width = width;
//         canvas.height = height;
//     }
//
//     // animation
//     function initAnimation() {
//         animate();
//         for(var i in points) {
//             shiftPoint(points[i]);
//         }
//     }
//
//     function animate() {
//         if(animateHeader) {
//             ctx.clearRect(0,0,width,height);
//             for(var i in points) {
//                 // detect points in range
//                 if(Math.abs(getDistance(target, points[i])) < 10000) {
//                     points[i].active = 0.3;
//                     points[i].circle.active = 0.6;
//                 } else if(Math.abs(getDistance(target, points[i])) < 30000) {
//                     points[i].active = 0.1;
//                     points[i].circle.active = 0.3;
//                 } else if(Math.abs(getDistance(target, points[i])) < 60000) {
//                     points[i].active = 0.02;
//                     points[i].circle.active = 0.1;
//                 } else {
//                     points[i].active = 0;
//                     points[i].circle.active = 0;
//                 }
//
//                 drawLines(points[i]);
//                 points[i].circle.draw();
//             }
//         }
//         requestAnimationFrame(animate);
//     }
//
//     function shiftPoint(p) {
//         TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
//             y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
//             onComplete: function() {
//                 shiftPoint(p);
//             }});
//     }
//
//     // Canvas manipulation
//     function drawLines(p) {
//         if(!p.active) return;
//         for(var i in p.closest) {
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p.closest[i].x, p.closest[i].y);
//             ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
//             ctx.stroke();
//         }
//     }
//
//     function Circle(pos,rad,color) {
//         var _this = this;
//
//         // constructor
//         (function() {
//             _this.pos = pos || null;
//             _this.radius = rad || null;
//             _this.color = color || null;
//         })();
//
//         this.draw = function() {
//             if(!_this.active) return;
//             ctx.beginPath();
//             ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
//             ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
//             ctx.fill();
//         };
//     }
//
//     // Util
//     function getDistance(p1, p2) {
//         return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
//     }
//
// })();
