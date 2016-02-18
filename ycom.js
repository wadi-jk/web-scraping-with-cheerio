var request = require('request');
var cheerio = require('cheerio');

var url = 'https://news.ycombinator.com';

use .prev

request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      var rank = a.parent().parent().text();
      var title = a.text();

      // Our parsed meta data object
      var metadata = {
        rank: parseInt(rank),
        title: title,
      };
      console.log(metadata);
    });
  }
});
