var s = skrollr.init();

//導覽列
$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top"); 
  else
      $(".navbar").addClass("navbar-top");
});

//start
$(".btn1").click(function(){
  $('html, body').animate({
                scrollTop: 600
            }, 500);
})




// $(function() {
//   $('.chart').easyPieChart({
//     scaleColor: "#ecf0f1",
//     lineWidth: 20,
//     lineCap: 'butt',
//     barColor: '#1abc9c',
//     trackColor:	"#ecf0f1",
//     size: 160,
//     animate: 500
//   });
// });