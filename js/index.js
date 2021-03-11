
let table = document.getElementById("table");

//Make request to contentful api to get data
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "wg1ulkn58gj9",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "o0J72qDOOxUWepEu9GokeOaLYsyhJq8GTYWP27PwUS4"
  });
  client.getEntries()
  .then((response) => {

    //Get data and store it inside a variable:data
  let data = response.items



  //filter data to get list of all products
let allProducts = []
 for(i=0; i<data.length;i++){
  allProducts.push(response.items[i].fields.productName)
}

  })
.catch(console.error);






  



















// //console.log(priceList2);
// priceList.map((item,index)=>{

//   //console.log(item.retailer);
//   })
  

























  //login form toggle sign-in and sing-up forms
$(document).ready(function() {
$('.sign-up').click(()=>{
  $('#signIn').slideUp(400);
  $('#signUp').show(400);
}) 

$('.sign-in').click(()=>{
  $('#signIn').show(400);
  $('#signUp').slideUp(400);
}) 

});



