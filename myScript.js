// collapsing the navbar when a link is clicked
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// $(document).ready(function () {
//   $(".navbar-nav li a").click(function(event) {
//     $(".navbar-collapse").collapse('hide');
//   });
// });

// collapsing the navbar on a click anywhere on the ody
$(document).ready(function () {
  $("body").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});