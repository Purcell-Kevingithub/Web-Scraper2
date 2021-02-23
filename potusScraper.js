// const rp = require('request-promise');
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function(html){
//     //success!
//     console.log(html);
//   })
//   .catch(function(err){
//     //handle error
//   });


// const rp = require('request-promise');
// const $ = require('cheerio');
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function(html){
//     //success!
//     console.log($('.wikitable b a', html).length);
//     console.log($('.wikitable b a', html));
//   })
//   .catch(function(err){
//     //handle error
//   });


// const rp = require('request-promise');
// const $ = require('cheerio');
// const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

// rp(url)
//   .then(function(html){
//     //success!
//     const wikiUrls = [];
//     for (let i = 0; i < 46; i++) {
//       wikiUrls.push($('.wikitable b a', html)[i].attribs.href);
//     }
//     console.log(wikiUrls);
//   })
//   .catch(function(err){
//     //handle error
//   });

const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html) {
    //success!
    const wikiUrls = [];
    for (let i = 0; i < 46; i++) {
        wikiUrls.push($('.wikitable b a', html)[i].attribs.href);
    }
    return Promise.all(
      wikiUrls.map(function(url) {
        return potusParse('https://en.wikipedia.org' + url);
      })
    );
  })
  .then(function(presidents) {
    console.log(presidents);
  })
  .catch(function(err) {
    //handle error
    console.log(err);
  });

