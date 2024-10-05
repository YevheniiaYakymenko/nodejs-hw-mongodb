import Joi from 'joi';
import { contactTypeList } from '../constants/contacts.js';

export const contactAddSchema = Joi.object({
  name: Joi.string().required().min(3).max(20).messages({
    'string.base': 'Contact name must be a string',
    'any.required': 'Contact name must be exist',
    'string.min': 'Contact name should have at least {#limit} characters ',
    'string.max': 'Contact name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().required().min(3).max(20).messages({
    'string.base': 'Contact phoneNumber must be a string',
    'any.required': 'Contact phoneNumber must be exist',
    'string.min':
      'Contact phoneNumber should have at least {#limit} characters ',
    'string.max': 'Contact phoneNumber should have at most {#limit} characters',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact email must be a string',
    'string.min': 'Contact email should have at least {#limit} characters ',
    'string.max': 'Contact email should have at most {#limit} characters',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .required()
    .min(3)
    .max(20)
    .valid(...contactTypeList),
  photo: Joi.string(),
});

export const contactPatchSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact name must be a string',
    'string.min': 'Contact name should have at least {#limit} characters ',
    'string.max': 'Contact name should have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact phoneNumber must be a string',
    'string.min':
      'Contact phoneNumber should have at least {#limit} characters ',
    'string.max': 'Contact phoneNumber should have at most {#limit} characters',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Contact email must be a string',
    'string.min': 'Contact email should have at least {#limit} characters ',
    'string.max': 'Contact email should have at most {#limit} characters',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid(...contactTypeList),
  photo: Joi.string(),
});
