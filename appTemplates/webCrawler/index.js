import tress from 'tress';
import cheerio from 'cheerio';
import fs from 'fs';
import request from 'request-promise';
import path from 'path';

const URL = 'https://www.indeed.ca/jobs?q=react.js&l=Vancouver,+BC&jt=fulltime';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36';

const getItem = ($, item) => {
  const title = $('.title', item).text();
  const companyName = $('[data-tn-element="companyName"]', item).text();
  const companyRating = $('.ratingsContent', item).text();
  const link = path.join('https://ca.indeed.com/', $('[data-tn-element="jobTitle"]', item).attr('href'));

  return {
    title: title.replace(/\n/gim, ''),
    companyName: companyName.replace(/\n/gim, ''),
    companyRating: companyRating.replace(/\n/gim, ''),
    link: link.replace(/\n/gim, ''),
  };
};


/**
 * @param {string} url
 * @returns {Promise<any>}
 * @description return parsed data from website
 */
const fetch = async(url) => {
  return new Promise((resolve, reject) => {
    let results = [];

    let queue = tress(function(url, callback){
      const options = {
        method: 'GET',
        uri: url,
        resolveWithFullResponse: true,
        headers: {
          'user-agent': USER_AGENT,
        }
      };

      request(options)
        .then((res) => {
          let $ = cheerio.load(res.body);
          let jobItems = $('[data-tn-component="organicJob"]');
          console.log(results.push);
          jobItems.each((i) => {
            results.push(getItem($,jobItems[i]))
          });
          callback();
        });
    }, 10);

    queue.drain = () => resolve(results);
    queue.error = () => reject(err);
    queue.push(url);
  })
};

fetch(URL).then((data) => {
  fs.writeFileSync('./files/data.json', JSON.stringify(data, null, 4));

  console.log('Data was recorded', data)
});

