'use strict';

/**
 * `HtmlBuilder` service.
 */

const request = require('request');

module.exports = {
  buildPage: async (data) => {
    strapi.log.info('here it is!!!!', data);

    var clientServerOptions = {
      uri: 'http://localhost:3000/build/' + data.template,
      body: JSON.stringify({
        destDir: data.pageName,
        context: data,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 120000,
    };

    request(clientServerOptions, function (error, response) {
      if (response) {
        console.log(response.body);
      } else {
        console.log(error);
      }
      return;
    });
  }
};
