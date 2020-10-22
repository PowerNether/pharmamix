$(document).ready(function () {
  $(".select").SumoSelect({});
  $(".lk-block__select").SumoSelect({});
  $("input")
    .unbind()
    .blur(function () {
      if (".input") {
        var rg_mail = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
        var rg_reg__telephone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        if ($(this)[0].id == "mail") {
          if ($(this).val().search(rg_mail) == 0 && $(this).val() != "") {
            $(this).removeClass("input-invalid").addClass("input-valid");
          } else if (
            $(this).val().search(rg_mail) == -1 &&
            $(this).val().length != 0
          ) {
            $(this).removeClass("input-valid").addClass("input-invalid");
          } else if ($(this).val().length == 0) {
            $(this).removeClass("input-valid").removeClass("input-invalid");
          }
        } else if (
          $(this)[0].id == "current-password" ||
          $(this)[0].id == "reg__password" ||
          $(this)[0].id == "reg__username"
        ) {
          if ($(this).val().length >= 5) {
            $(this).removeClass("input-invalid").addClass("input-valid");
          } else if ($(this).val().length <= 5 && $(this).val().length != 0) {
            $(this).removeClass("input-valid").addClass("input-invalid");
          } else if ($(this).val().length == 0) {
            $(this).removeClass("input-valid").removeClass("input-invalid");
          }
        } else if ($(this)[0].id == "reg__telephone") {
          if (
            $(this).val().search(rg_reg__telephone) == 0 &&
            $(this).val() != ""
          ) {
            $(this).removeClass("input-invalid").addClass("input-valid");
          } else if (
            $(this).val().search(rg_reg__telephone) == -1 &&
            $(this).val().length != 0
          ) {
            $(this).removeClass("input-valid").addClass("input-invalid");
          } else if ($(this).val().length == 0) {
            $(this).removeClass("input-valid").removeClass("input-invalid");
          }
        } else if ($(this)[0].id == "reg__test-number") {
          if ($(this).val().length == 14) {
            $(this).removeClass("input-invalid").addClass("input-valid");
          } else if ($(this).val().length <= 13 && $(this).val().length != 0) {
            $(this).removeClass("input-valid").addClass("input-invalid");
          } else if ($(this).val().length == 0) {
            $(this).removeClass("input-valid").removeClass("input-invalid");
          }
        }
      }
    });
  $(".lk-support__head").on("click", function () {
    $(this).children(".lk-support__head-image").toggleClass("active");
    $(this).parent().children(".lk-support__body").slideToggle();
  });
  $(".page-header__tab").on("click", function () {
    $(".page-header__tab").removeClass("active");
    $(this).addClass("active");
    let tab = $(this).attr("data-tab");
    $(".lk-content").addClass("hidden");
    $(".lk").children(tab).removeClass("hidden");
  });
  $(".page-header__toggler").on("click", function () {
    $(this).attr("src", function () {
      if ($(this).attr("src") == "./icons/menu-toggler.svg") {
        return "./icons/menu-close.svg";
      } else {
        return "./icons/menu-toggler.svg";
      }
    });
    $(".page-header__tabs").slideToggle();
  });
});
