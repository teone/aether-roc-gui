// GENERATED CODE -- DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
import { Deleted } from './deleted';
import { Path } from './path';
import { TypedValue } from './typed-value';

/**
 * the state of a path/value in the configuration tree
 */
export interface PathValue {

  /**
   * indicates whether this is a delete
   */
  deleted?: Deleted;

  /**
   * the path to change
   */
  path?: Path;

  /**
   * the change value
   */
  value?: TypedValue;
}