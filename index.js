const axios = require('axios');
const cheerio = require('cheerio');
const { MAL, URL } = require('./utils');

/**
 * Fetches the meaning of a word from Olam dictionary.
 * 
 * @param {string} query - The word to search.
 * @returns {Array<Object>|boolean>} An array of word definitions or false if no definition is found.
 */

String.prototype.format = function(...args) {
  return this.replace(/{}/g, () => args.shift());
};

module.exports = function (query) {
  let lang = query.match(MAL) ? 'malayalam' : 'english';
  let result = [];
  
  return axios.get(URL.format(lang, encodeURIComponent(query)))
    .then(({ data }) => {
      let $ = cheerio.load(data);
      let entries = $('.entry');

      entries.each((index, entry) => {
        let title = $(entry).find('.title').text().trim();
        let definitions = $(entry).find('ol.defs');

        definitions.each((i, def) => {
          let partOfSpeech = $(def).find('.types').text().replace(/-/g, '').trim() || null;

          $(def).find('.def').each((i, mean) => {
            let meaning = $(mean).text().trim();
            result.push({ title, partOfSpeech, meaning: meaning });
          });
        });
      });
      return result.length === 0 ? false : result;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
