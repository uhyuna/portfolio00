$(function () {
  // donut1
  $(".donut1").click(function () {
    $(".popup").css("display", "block");
    $(".pop1").css("display", "flex");
  });
  // donut2
  $(".donut2").click(function () {
    $(".popup").css("display", "block");
    $(".pop2").css("display", "flex");
  });
  // donut3
  $(".donut3").click(function () {
    $(".popup").css("display", "block");
    $(".pop3").css("display", "flex");
  });
  // donut4
  $(".donut4").click(function () {
    $(".popup").css("display", "block");
    $(".pop4").css("display", "flex");
  });
  // donut5
  $(".donut5").click(function () {
    $(".popup").css("display", "block");
    $(".pop5").css("display", "flex");
  });
  // donut6
  $(".donut6").click(function () {
    $(".popup").css("display", "block");
    $(".pop6").css("display", "flex");
  });
  // donut7
  $(".donut7").click(function () {
    $(".popup").css("display", "block");
    $(".pop7").css("display", "flex");
  });
  // donut8
  $(".donut8").click(function () {
    $(".popup").css("display", "block");
    $(".pop8").css("display", "flex");
  });
  // donut9
  $(".donut9").click(function () {
    $(".popup").css("display", "block");
    $(".pop9").css("display", "flex");
  });
  // donut10
  $(".donut10").click(function () {
    $(".popup").css("display", "block");
    $(".pop10").css("display", "flex");
  });
  // donut11
  $(".donut11").click(function () {
    $(".popup").css("display", "block");
    $(".pop11").css("display", "flex");
  });
  // donut12
  $(".donut12").click(function () {
    $(".popup").css("display", "block");
    $(".pop12").css("display", "flex");
  });
  // donut13
  $(".donut13").click(function () {
    $(".popup").css("display", "block");
    $(".pop13").css("display", "flex");
  });
  // donut14
  $(".donut14").click(function () {
    $(".popup").css("display", "block");
    $(".pop14").css("display", "flex");
  });
  // donut15
  $(".donut15").click(function () {
    $(".popup").css("display", "block");
    $(".pop15").css("display", "flex");
  });
  // donut16
  $(".donut16").click(function () {
    $(".popup").css("display", "block");
    $(".pop16").css("display", "flex");
  });
  // donut17
  $(".donut17").click(function () {
    $(".popup").css("display", "block");
    $(".pop17").css("display", "flex");
  });
  // donut18
  $(".donut18").click(function () {
    $(".popup").css("display", "block");
    $(".pop18").css("display", "flex");
  });
  // donut19
  $(".donut19").click(function () {
    $(".popup").css("display", "block");
    $(".pop19").css("display", "flex");
  });
  // donut20
  $(".donut20").click(function () {
    $(".popup").css("display", "block");
    $(".pop20").css("display", "flex");
  });

  // close popup
  $(".close").click(function () {
    $(".popup").css("display", "none");
    $(".popup-wrap").css("display", "none");
  });
  $(document).mouseup(function (e) {
    var movewrap = $(".popup");
    var movewrap2 = $(".popup-wrap");
    if (movewrap.has(e.target).length === 0) {
      movewrap.hide();
    }
    if (movewrap2.has(e.target).length === 0) {
      movewrap2.hide();
    }
  });
  // sub-menu-mobile
  $(".sub-menu-mobile").click(function () {
    $(".down").slideToggle();
  });
  // allergy & origin drop
  $(".allergy").click(function () {
    $(".allergy-hide").slideToggle();
    $(this).find("img").toggleClass("arrow-rotate");
  });

  $(".origin").click(function () {
    $(".origin-hide").slideToggle();
    $(this).find("img").toggleClass("arrow-rotate");
  });
});
