$(document).ready(function() {

  //login form toggle sign-in and sing-up forms
$('.sign-up').click(()=>{
  $('#signIn').slideUp(100);
  $('#signUp').show(400);
}) 

$('.sign-in').click(()=>{
  $('#signIn').show(400);
  $('#signUp').slideUp(400);
}) 



});



