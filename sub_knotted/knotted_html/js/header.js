$(function () {
    if (matchMedia("screen and (min-width: 768px)").matches) {
        $(".gnb > li")
            .mouseover(function () {
                $(this).find(".depth2").stop().slideDown();
            })
            .mouseout(function () {
                $(this).find(".depth2").stop().slideUp();
            });
    } else {
        $(".ham-open").click(function () {
            $(".gnb-m").fadeIn();
            $(this).fadeOut();
            $(".ham-close").fadeIn();
            $("header").css({ position: "fixed", top: 0, "z-index": "3" });
        });
        $(".ham-close").click(function () {
            $(".gnb-m").fadeOut();
            $(this).fadeOut();
            $(".ham-open").fadeIn();
            $("header").css({ position: "relative", top: "none", "z-index": "none" });
        });

        $(".gnb-m > li").click(function () {
            $(this).find(".depth2-m").stop().slideToggle();
            $(this).find("a").toggleClass("rotate");
        });
    }
});
