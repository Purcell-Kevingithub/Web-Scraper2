// const rp = require('request-promise');
// const url = 'https://en.wikipedia.org/wiki/George_Washington';

// rp(url)
//   .then(function(html) {
//     console.log(html);
//   })
//   .catch(function(err) {
//     //handle error
//   });


// const rp = require('request-promise');
// const $ = require('cheerio');
// const url = 'https://en.wikipedia.org/wiki/George_Washington';

// function stripdate(date){
//     return date.slice(0,10)
// }

// rp(url)
//   .then(function(html) {
//     console.log($('.firstHeading', html).text());
//     console.log(stripdate($('.bday', html).text()));
//   })
//   .catch(function(err) {
//     //handle error
//   });


const rp = require('request-promise');
const $ = require('cheerio');

function stripdate(date){
    return date.slice(0,10)
}

const potusParse = function(url) {
  return rp(url)
    .then(function(html) {
      return {
        name: $('.firstHeading', html).text(),
        birthday: stripdate($('.bday', html).text()),
      };
    })
    .catch(function(err) {
      //handle error
    });
};

module.exports = potusParse;