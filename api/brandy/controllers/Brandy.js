'use strict';

/**
 * Brandy.js controller
 *
 * @description: A set of functions called "actions" for managing `Brandy`.
 */

module.exports = {

  /**
   * Retrieve brandy records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.brandy.fetchAll(ctx.query);
  },

  /**
   * Retrieve a brandy record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.brandy.fetch(ctx.params);
  },

  /**
   * Create a/an brandy record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.brandy.add(ctx.request.body);
  },

  /**
   * Update a/an brandy record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.brandy.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an brandy record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.brandy.remove(ctx.params);
  }
};
