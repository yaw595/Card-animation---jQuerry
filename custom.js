$(document).ready(function () {
    $(".check.mdi").click(function () {
      $(this).toggleClass("mdi-check-circle mdi-check-circle-outline");
    });
  });
  
  $(document).ready(function () {
    $("#btn1").click(function () {
      $('.card-img-top').hide(1000);
      $('.avatar').hide(1000);
      $('#cbd1').hide(1000);
      $('#cb2').show(1000); 
    });
    
    $("#btn2").click(function() {
      $('#cb2').hide(1000);
      $('.card-img-top').show(1000);
      $('.avatar').show(1000);
      $('#cbd1').show(1000);
    });
    
  });
  
  
