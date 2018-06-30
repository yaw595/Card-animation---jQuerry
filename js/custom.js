$(document).ready(function () {
  $(".check.mdi").click(function () {
    $(this).toggleClass("mdi-check-circle mdi-check-circle-outline");
  });
});

$(document).ready(function () {
  $("#btn1").click(function () {
    $('.card-img-top').fadeOut(1000);
    $('.avatar').fadeOut(1000);
    $('#cbd1').fadeOut(1000);
    $('#cb2').fadeIn(1000);
  });
  
  // function infoChange() {
  //   $('.card-img-top').hide();
  //   $('.avatar').hide();
  //   $('#cbd1').hide();
  //   $('#cb2').show();
  // };
  
  // $("#btn1").click(function() {
  //   infoChange();
  // });
  
  $("#btn2").click(function() {
    $('#cb2').fadeOut(1000);
    $('.card-img-top').fadeIn(1000);
    $('.avatar').fadeIn(1000);
    $('#cbd1').fadeIn(1000);
  });
  
});

