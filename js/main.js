$( document ).ready(function() {
    

$( ".keyword" ).click(function() {
  $( ".k-toggle" ).slideToggle( "slow" );
});

$( ".foreword" ).click(function() {
  $( ".f-toggle" ).slideToggle( "slow" );
});

$( ".no" ).click(function() {
  $( ".t-toggle" ).slideToggle( "slow" );
});

$(document).ready(function(){
  $('.left_1 video').hover(
    function(){ this.pause();},
    function(){ this.play(); }
  );
})


















});