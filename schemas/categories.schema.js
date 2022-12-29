import Joi from 'joi-oid'

const schema = Joi.object({
  name: Joi.string().required().min(3).max(10).message({
    'string.base': `debe ser de tipo texto`,
    'string.empty': `no puede estar vacío`,
    'string.min': `debe tener al menos 3 caracteres`,
    'string.max': `debe tener como máximo 10 caracteres`,
    'any.required': `es un campo requerido`,
  }),
  ranking: Joi.number().min(1).max(100),
  examples: Joi.array(),
  detail: Joi.string().required().max(100),
  user_id: Joi.objectId().required(),
})

export default schema