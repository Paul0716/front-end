const express = require('express');
const router = express.Router();
const q = require('q');
const request = require("request");
const rp = require("request-promise");
const cheerio = require("cheerio");
const _ = require("lodash");

function postProductDetail(url){
    var deferred = q.defer();
    var options = {
        method: "GET",
        uri: url,
        json:true,
        transform: function (body) {
            return cheerio.load(body);
        }
    }
    rp(options)
        .then(function ($) {
            var options = [];
            var thumb           = $(".thumb > img").attr("src");
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

            var data = {
                thumb: thumb,
                title: title,
                serial_number: serial_number,
                origin_price: origin_price,
                discount: discount_value,
                pay: you_pay_value,
                min_qty: min_qty,
                options: options
            };
            deferred.resolve(data);
        })
        .catch(function (err) {
            throw err;
        });
        return deferred.promise;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/cosco', function(req, res, next) {  
    var url = req.body.url;
    postProductDetail(url)
        .then(function(data){
            console.log(data);
            res.json({
                data: data,
            });
            res.send();
            res.end();
        });
});
module.exports = router;
