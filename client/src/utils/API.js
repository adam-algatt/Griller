// export const searchWeber = (query) => {

//     return fetch('https://www.weber.com/US/en/recipes/all-recipes/weber-2014542.html')
// // https://www.weber.com/US/en/recipes/weber-31811.html : URL for all Weber Recipes
// // https://www.weber.com/US/en/recipes/all-recipes/weber-2014542.html
// // red meat weber = https://www.weber.com/US/en/recipes/red-meat/weber-31829.html

// const axios = require('axios');
// const cheerio = require('cheerio');
// const express = require('express');
// // const PORT = 3001;
// // const app = express();

// axios(searchWeber)
//     .then(response => {
//         // storing scraped data from axios as var
//         const html = response.data

//         const $ = cheerio.load(html)
//         let articles = [];
 
//         //function generates HTML from scrapings
//         // const generateHTML = function (title, image, link) {
//         // };

//         $('.recipe-item').each((i, element) => {
//             //object to keep individual recipes
//             let recipe = {};

//             // breaks down search page from allrecipes.com to individual recipes each containing: title, link, and recipe image
//             const title = $(element)
//                 .find('.item-title')
//                 .text().trim();
               

//              const link = $(element)
//                  .find('a')
//                  .attr('href');

//             const image = $(element)
//                 .find('span')
//                 .attr('data-bgset');

//                 recipe.title = title;
//                 recipe.link = link;
//                 recipe.image = image; 

//                 articles.push(recipe);
//             // console.log(`${articles}`)
//             // console.log(`title: ${title}\n image: ${image}\n\n url: ${link}`);
           
//         })
//     console.log(articles);
//     }
// }

