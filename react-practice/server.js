/**
 * Loading dependent library
 */
const http = require('http');
const port = 8081;
const hosting = "localhost"

const request = require("request");
const cheerio = require("cheerio");
const _ = require("lodash");

function postProductDetail(url){
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(body)
            var options = [];

            var title 			= $("title").text().split("|")[0].trim();
            var serial_number 	= "#"+$(".item-number",".product-name").text().trim().split("#")[1];
            var $price_sections = $(".price-sections");
            var origin_price 	= $price_sections.find(".price-value").text().trim();
            var discount_value 	= $price_sections.find(".discount-value").text().trim();
            var you_pay_value 	= $price_sections.find(".you-pay-value").text().trim();
            var min_qty 		= $price_sections.find(".qty-selector > option:first-child").text().trim();
            var opts 			= $(".variant-section").find("li > span");
            _.forEach(opts, function(opt){
                var text = $(opt).text();
                options.push( text );	
            });
            


            console.log("title: "+ title);
            console.log("serial number: "+serial_number);
            console.log("origin price: "+origin_price);
            console.log("discount: "+discount_value);
            console.log("pay: "+ you_pay_value);
            console.log("min qty: "+min_qty);
            _.forEach(options, function(option){
                console.log("option:"+option);
            });
            

        }
    });
}

http.createServer(function (req, res) {
    var body = "";
    req.on('data', function (chunk) {
        
    });
    // res.end('Hello, World!');
}).listen(port, hosting);

console.log("Server now is listening port: "+ port);