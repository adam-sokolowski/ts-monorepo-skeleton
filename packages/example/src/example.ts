import { isString } from 'lodash';

/**
 * Example description
 * @param value string
 * @returns string
 *
 * @example
 * 'My string' => 'My string'
 */
export function example(value: string): string {
  if (!value || !isString(value)) {
    return '';
  }
  
  return value;
}
