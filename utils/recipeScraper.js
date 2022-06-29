const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const PORT = 3001;
const app = express();

//make url that works with event listener for front end `https://www.allrecipes.com/search/results/?search=${input}`
//all recipes uses a plus to join works separated by a space
//take user input, pushing it to an array and take arr and arr.join('+');
const url = 'https://www.allrecipes.com/search/results/?search=bbq'

axios(url)
    .then(response => {
        // storing scraped data from axios as var
        const html = response.data

        const $ = cheerio.load(html)
        let articles = [];
 
        //function generates HTML from scrapings
        const generateHTML = function (title, image, link) {
            // 

        };

        $('.component.card.card').each((i, element) => {
            //object to keep individual recipes
            let recipe = {};

            // breaks down search page from allrecipes.com to individual recipes each containing: title, link, and recipe image
            const title = $(element)
                .find('a')
                .attr('title');

            const link = $(element)
                .find('a')
                .attr('href');

            const image = $(element)
                .find('.component')
                .attr('data-src');

                recipe.title = title;
                recipe.link = link;
                recipe.image = image; 

                articles.push(recipe);
            // console.log(`${title} \n ${image}\n\n ${link}\n`);
           
        })
 console.log(articles);
    })
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))