// alert("Hii")
// var jdata;
// var dynamicUrl = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';
// $.getJSON(dynamicUrl, function(data) {
//     $.each(data, function(i, field){
//     $("div").append(field + " ");
//     console.log(data);
//     jdata = data;
//     });
// });
// console.log(jdata);


// var dynamicUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1" ;
// data = JSON.parse(dynamicUrl);
// console.log(data);

const request = require('request');
request('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', function(err, res, body) {  
      console.log(body);
  });