
let table = document.getElementById("table");

let productsPriceList = []

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


//filter data to get price lists of all products
let productData = []
 for(i=0; i<data.length;i++){
   productData.push(response.items[i].fields)
}


for(i=0;i<productData.length;i++){
productsPriceList.push(productData[i])
}
//filter product price to get product price list for single product

let priceList1 = productsPriceList[0].retailerDetails 
let priceList2 = productsPriceList[1].retailerDetails
let priceList3 = productsPriceList[2].retailerDetails
let priceList4 = productsPriceList[3].retailerDetails
let priceList5 = productsPriceList[4].retailerDetails
let priceList6 = productsPriceList[5].retailerDetails
let priceList7 = productsPriceList[6].retailerDetails
let priceList8 = productsPriceList[7].retailerDetails
let priceList9 = productsPriceList[8].retailerDetails
let priceList10 = productsPriceList[9].retailerDetails



//function to link product with its appropriate price list

var getPriceList = (value)=>{
  switch (value) {
    case "tissue":
    return priceList1
      break;
      case "lotion":
        return priceList2
      break;
      case "kiwi":
        return priceList3
      break;
      case "salt":
        return priceList4
      break;
      case "sugar":
        return priceList5
      break;
      case "barsoap":
        return priceList6
      break;
      case "cooking oil":
        return priceList7
      break;
      case "vaseline":
        return priceList8
      break;
      case "flour":
        return priceList9
      break;
      case "blueband":
        return priceList10
      break;
  default:
  return null;
};
}

//onclick function to display product price in different retail stores and displays the prices in a table
$(document).ready(function() {

  $('#selectBtn').click(()=>{
  
//clear table data on button click 
    let resetTable=()=>{
      $("#table > tbody").remove();
    }
    resetTable()
    let selectedProduct = $("#productSelection option:selected").val();
  
    //gets an individual product price list in different retail stores
  let selectedPriceList = getPriceList(selectedProduct);
  let prices = []


  //populate table with product price list data 
  let t =""
    for (var i = 0; i < selectedPriceList.length; i++){
          var tr = "<tr>";
          tr += "<td>"+selectedPriceList[i].retailer+"</td>";
          tr += "<td>"+selectedPriceList[i].productPrice+"</td>";
            tr += "</tr>";
          t += tr;
          prices.push(parseInt(selectedPriceList[i].productPrice))
    }

//get least value of product prices from different retailers 
let arr = Object.values(prices);
var min = Math.min(...arr);

$('.price').text(min)
$('.priceInfo').show()
    
document.getElementById("table").innerHTML += t;  
})
})
  })
.catch(console.error);



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



