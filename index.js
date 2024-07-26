$(document).ready(function(){  
  $(".hammenu img").click(function(){
    $(".hammenu_sub").stop().animate({"right":"0px"});
  });
  $(".x_menu").click(function(){
    $(".hammenu_sub").stop().animate({"right":"-300px"});
  });
  $(".gnb li").mouseenter(function(){
      $(this).find(".sub").stop().slideDown();
  });
  $(".gnb li").mouseleave(function(){
      $(this).find(".sub").stop().slideUp();
  });
});
