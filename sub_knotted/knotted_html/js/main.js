$(function () {
    // 메인슬라이드
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        autoplay: {
            //자동슬라이드 (false-비활성화)
            delay: 3000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // 메뉴 컨텐츠 변경
    var $explain1 = $(".explain p");
    var $explain2 = $(".explain b");

    var click = $(".berry").click();

    $(".milk").click(function () {
        $explain1.text("노티드의 가장 대표적인 메뉴");
        $explain2.text("우유 생크림 도넛");
        $(this).css({
            transform: "scale(1.1)",
            border: "3px solid #92D3C9",
        });
        $(".vanilla").css({
            transform: "scale(0.9)",
            border: "none",
        });
        $(".berry").css({
            transform: "scale(0.9)",
            border: "none",
        });
    });

    $(".vanilla").click(function () {
        $explain1.text("Classic is Best");
        $explain2.text("클래식 바닐라 도넛");
        $(this).css({
            transform: "scale(1.1)",
            border: "3px solid #92D3C9",
        });
        $(".milk").css({
            transform: "scale(0.9)",
            border: "none",
        });
        $(".berry").css({
            transform: "scale(0.9)",
            border: "none",
        });
    });
    $(".berry").click(function () {
        $explain1.text("크림과 딸기의 조화");
        $explain2.text("스트로베리 크림 도넛");
        $(this).css({
            transform: "scale(1.1)",
            border: "3px solid #92D3C9",
        });
        $(".vanilla").css({
            transform: "scale(0.9)",
            border: "none",
        });
        $(".milk").css({
            transform: "scale(0.9)",
            border: "none",
        });
    });


    /////////////////////////////
});
