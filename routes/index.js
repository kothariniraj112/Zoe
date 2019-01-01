var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

// https://docs.google.com/forms/d/e/1FAIpQLSf_hi_8FmmRDatJ_y7X3GXIzO8QD3aDgpqFcvkkrqWR1rRXSA/viewform?usp=sf_link
/* GET home page. */
router.get('/', function(req, res, next) {

  request('https://goo.gl/forms/xJjb5uIvqBDGUv4P2', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    // res.send('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // res.send({body:body}); // Print the HTML for the Google homepage.
    const $ = cheerio.load(body)
var index=body.indexOf('var FB_PUBLIC_LOAD_DATA_');
var impstring=body.slice(index,body.length);
var index2=impstring.indexOf('</script>')
var publicdata=impstring.slice(0,index2)
//  var publicdata=impstring
console.log(publicdata);
res.send({publicdata});
  });
  });

module.exports = router;
