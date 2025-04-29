/**
 * singer controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::singer.singer', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx

    // Ejecuta la búsqueda normal de Strapi
    const entities = await strapi.entityService.findMany('api::singer.singer', {
      ...query,
      populate: ['nationality', 'birth_place', 'voice', 'organizations', 'gallery', 'profile_image', 'users_permissions_user', 'biography_text'],
    })

    return this.transformResponse(entities)
  },

  async findOne(ctx) {
    const { id } = ctx.params

    const entity = await strapi.entityService.findOne('api::singer.singer', id, {
      populate: ['nationality', 'birth_place', 'voice', 'organizations', 'gallery', 'profile_image', 'users_permissions_user', 'biography_text'],
    })

    if (!entity) {
      return ctx.notFound('Singer not found')
    }

    return this.transformResponse(entity)
  },

  async update(ctx) {
    const { id } = ctx.params
    const { data } = ctx.request.body

    try {
      const updatedEntity = await strapi.entityService.update('api::singer.singer', id, {
        data,
        populate: ['nationality', 'birth_place', 'voice', 'organizations', 'gallery', 'profile_image', 'users_permissions_user', 'biography_text'],
      })

      return this.transformResponse(updatedEntity)
    } catch (err) {
      ctx.throw(400, 'Error al actualizar el perfil del cantante')
    }
  }
}))
