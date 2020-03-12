$(function() {
  var Mustache = require('mustache');
 
  $.getJSON('js/data.json', function(data) {
    var template = $('#speakerstpl').html();
    var html = Mustache.render(template, data);
    $('#speakers').html(html);    
  }); //getJSON
  
}); //function