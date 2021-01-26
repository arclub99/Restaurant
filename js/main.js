function() {
    $(".side-menu").removeClass("side-menu-opacity");
    $(".pushwrap").toggleClass("active");
    $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
}

function(){
    $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
    setTimeout(function() {
      $(".side-menu").addClass("side-menu-opacity");
    }, 500);
}