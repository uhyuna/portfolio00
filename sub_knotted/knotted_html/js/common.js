$(function () {
    // 스크롤탑
    $(".scroll-top").click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    //스크롤 라이브러리

    // 반응형
    AOS.init({
        disable: function () {
            var desktop = 1439;
            return window.innerWidth < desktop;
        }, // 1439px 이하일 때 disable
    });
    window.onresize = function () {
        document.location.reload();
    };
});
