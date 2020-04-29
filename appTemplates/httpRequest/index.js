import request from 'request-promise';

const URL = 'https://www.indeed.ca/';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36';

/**
 * @param {string} url
 * @returns {Promise<any>}
 * @description return request data
 */
const fetch = async (url) => {
  const options = {
    method: 'GET',
    uri: url,
    resolveWithFullResponse: true,
    headers: {
      'user-agent': USER_AGENT,
    },
    qs: {
      q: 'react.js',
      l: 'Vancouver,+BC',
      jt: 'fulltime',
    },
  };

  return request(options)
    .catch((e) => console.error(e));
};

fetch(URL).then((data) => {
  console.log('Successes!', data.statusCode, data.headers, data.body)
});

