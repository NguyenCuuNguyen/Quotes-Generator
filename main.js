alert('JavaScript file is connected');
var endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
function getQuote(){
  fetch(endpoint) //takes endpoint returns promise
    .then(function (response){
      return response.json(); //turn raw response into json
    })
    .then(function (data){
      displayQuote(data.message); //invoke displayQuote func+ access the actual data for use
    })
    .catch(function () {
      console.log('An error occured'); //if fetch request or then block throws error
    });
}
//Define displayQuote
function displayQuote(quote){
  var quoteText = document.querySelector('.quote-text');
  quoteText.textContent = quote; //assign the textContent property of the quoteText element to the quote we want to display
}
var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote(); //prepopulate the page with a quote when it loads
