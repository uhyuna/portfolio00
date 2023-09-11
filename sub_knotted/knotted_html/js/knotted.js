$(function () {
    if (matchMedia("screen and (min-width: 1440px)").matches) {
        // text parellex
        $(window).scroll(function () {
            $(".fadeinleft").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ "margin-left": "0px" }, 500);
                }
            });
            // brand-object parellex
            $(".brand-object-wrap>img:first-child").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down1 2.5s 0.3s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(2)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down2 2s 1s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(3)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down3 1s 1s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(4)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down4 2s 0.5s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(5)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down5 2s 2s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(6)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down6 3s 2s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(7)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down7 2.5s 3s linear forwards'
                    });
                }
            });
            $(".brand-object-wrap>img:nth-child(8)").each(function (i) {
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).css({
                        'animation': 'down7 2s 3.5s linear forwards'
                    });
                }
            });
        });
    }
    /////////////////////////////
});


