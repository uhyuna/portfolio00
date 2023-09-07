$(function () {
  $(".store-box")
    .mouseover(function () {
      $(this).find(".store-name").css("color", "#5BC2B2");
    })
    .mouseout(function () {
      $(this).find(".store-name").css("color", "var( --text-color)");
    });

  const label = document.querySelectorAll(".label");
  label.forEach(function (lb) {
    lb.addEventListener("click", (e) => {
      let optionList = lb.nextElementSibling;
      let optionItems = optionList.querySelectorAll(".optionItem");
      clickLabel(lb, optionItems);
    });
  });
  const clickLabel = (lb, optionItems) => {
    if (lb.parentNode.classList.contains("active")) {
      lb.parentNode.classList.remove("active");
      optionItems.forEach((opt) => {
        opt.removeEventListener("click", () => {
          handleSelect(lb, opt);
        });
      });
    } else {
      lb.parentNode.classList.add("active");
      optionItems.forEach((opt) => {
        opt.addEventListener("click", () => {
          handleSelect(lb, opt);
        });
      });
    }
  };
  const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove("active");
  };

  var item = document.getElementsByClassName("optionItem");

  function handleClick(event) {
    console.log(event.target);

    console.log(event.target.classList);

    if (event.target.classList[1] === "clicked") {
      event.target.classList.remove("clicked");
    } else {
      for (var i = 0; i < item.length; i++) {
        item[i].classList.remove("clicked");
      }

      event.target.classList.add("clicked");
    }
  }

  function init() {
    for (var i = 0; i < item.length; i++) {
      item[i].addEventListener("click", handleClick);
    }
  }

  init();
});
