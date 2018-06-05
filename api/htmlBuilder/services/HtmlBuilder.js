'use strict';

/**
 * `HtmlBuilder` service.
 */

const request = require('request');

module.exports = {
  buildPage: async (data) => {
    var clientServerOptions = {
      uri: strapi.config.htmlBuilder.endpoint + data.template,
      body: JSON.stringify({
        destDir: data.pageName,
        context: data,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      'auth': {
        'user': strapi.config.htmlBuilder.user,
        'pass': strapi.config.htmlBuilder.pass,
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
