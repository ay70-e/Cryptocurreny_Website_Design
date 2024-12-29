$(document).ready(function() {
    // Fetch cryptocurrency prices from CoinGecko API
    $.getJSON('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd', function(data) {
        // Update the HTML with the fetched prices
        $('#bitcoin').text(data.bitcoin.usd);
        $('#ethereum').text(data.ethereum.usd);
        $('#dogecoin').text(data.dogecoin.usd);
    }).fail(function() {
        // Handle errors if the API call fails
        console.error("Error fetching data from CoinGecko API");
        $('#bitcoin').text("Error");
        $('#ethereum').text("Error");
        $('#dogecoin').text("Error");
    });
});