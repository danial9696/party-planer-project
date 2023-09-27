// eslint-disable-next-line import/no-extraneous-dependencies
import { ZodError } from 'zod';
import { CustomError } from './types';

/**
 * The function `isValidationError` checks if an error object is an instance of `ZodError`.
 * @param {unknown} err - The `err` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value.
 */
export function isValidationError(err: unknown): err is ZodError {
  return (err as ZodError).errors !== undefined;
}

/**
 * The function `isCustomError` checks if an error object is an instance of the `CustomError` class.
 * @param {unknown} err - The `err` parameter is of type `unknown`, which means it can be any type.
 * @returns a boolean value. It returns true if the provided error object is an instance of the
 * CustomError class and has a name property equal to 'CustomError'. Otherwise, it returns false.
 */
export function isCustomError(err: unknown): err is CustomError {
  return (err as CustomError).name === 'CustomError';
}
