$(function () {
    if (matchMedia("screen and (min-width: 1920px)").matches) {
        // fullscreen
        // 설정 초기화
        window.addEventListener(
            "wheel",
            function (e) {
                e.preventDefault();
            },
            { passive: false }
        );

        // 페이지 선언
        var $html = $("html");
        var page = 1;
        var lastPage = $(".full").length;

        $html.animate({ scrollTop: 0 }, 10);

        // 마우스 휠 이벤트
        $(window).on("wheel", function (e) {
            if ($html.is(":animated")) return;

            if (e.originalEvent.deltaY > 0) {
                if (page == lastPage) return;

                page++;
            } else if (e.originalEvent.deltaY < 0) {
                if (page == 0) return;

                page--;
            }
            var posTop = (page - 1) * $(window).height();

            $html.animate({ scrollTop: posTop });
        });
    }
    window.onresize = function () {
        document.location.reload();
    };
    /////////////////////////////
});
