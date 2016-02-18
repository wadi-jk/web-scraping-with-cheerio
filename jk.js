var request = require('request'); // simple http requests
var cheerio = require('cheerio'); //jqquery on the server

var express = require('express'); //use express for fs and path
var path = require('path'); //This module contains utilities for handling and transforming file paths

var fs = require('fs');
var app = express();

var port = 8000;

// Example 1
/*
var url = "http://jhkirkley.github.io/tech-blog/jekyll/2016/02/07/creating-a-github-pages-site-with-jekyll.html";



request(url, function (err,res, body) {
  if(err) {
    console.log(err);
  } else {
    console.log(body);
  }
});
*/
//Example 2

var url = "http://jhkirkley.github.io/tech-blog/jekyll/2016/02/07/creating-a-github-pages-site-with-jekyll.html";

request(url, function(err, res, body) {
  var pin = {};
  var $ = cheerio.load(body);
  var title = $("h1").text();
  console.log("scraped", title);

});

//Example 3
/*
var url = "http://jhkirkley.github.io/tech-blog/jekyll/2016/02/07/creating-a-github-pages-site-with-jekyll.html";

var destination = fs.createWriteStream('./scrapes/jk1.html');
request(url, function(err, res, body) {
  var pin = {};
  var $ = cheerio.load(body);
  var title = $("h1").text();
  console.log("scraped", title);
  return title;

}).pipe(destination)
  .on('finish', function() {
    console.log('All done');
  })
  .on('error', function() {
    console.log(err);
  });
*/
//Example 4
/*
var url = "http://jhkirkley.github.io/tech-blog/jekyll/2016/02/07/creating-a-github-pages-site-with-jekyll.html";

request(url, function(err, res, body) {
  var pin = {};
  var json = { title : ""};
  var $ = cheerio.load(body);
  var title = $("h1").text();
  console.log("scraped", title);
  json.title = title;
  fs.writeFile('./scrapes/jk.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the jk.json file');

});

});

*/

app.listen(port);
console.log('open on port 8000');





