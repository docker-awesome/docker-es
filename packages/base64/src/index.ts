import { default as decode } from './decode';
import { default as encode } from './encode';

export default class Base64 {
  static encode = encode;
  static decode = decode;
}
