(function () {
    
    var app = {
        initBurgerMenu: function () {
            $(".header-bm-inner").click(function () {
                $(".bm-side-nav").css("visibility", "visible").addClass("open");
                $("body").addClass("no-scroll");
            });

            $(".bm-close").click(function () {
                $(".bm-side-nav").removeClass("open");
                $("body").removeClass("no-scroll");

                // Delay visibility change to allow smooth transition
                setTimeout(function () {
                    if (!$(".bm-side-nav").hasClass("open")) {
                        $(".bm-side-nav").css("visibility", "hidden");
                    }
                }, 400); // Matches transition duration
            });
        },

        initHeader: function () {
            $(window).on("scroll", function () {
                if ($(window).scrollTop() > 0) {
                    $("header").addClass("fixed");
                } else {
                    $("header").removeClass("fixed");
                }
            });
        },

        initWOW: function () {
            if (typeof WOW !== "undefined") {
                new WOW().init();
            } else {
                console.error("WOW.js not loaded!");
            }
        }
    };

    jQuery(document).ready(function () {
        app.initBurgerMenu();
        app.initHeader();
        new WOW().init();
        $(".arrow-up").click(function(){
            $("html, body").animate({ scrollTop: $("#banner").offset().top }, "slow");
        });
    });

    jQuery(window).on("load", function () {});
    
})();
