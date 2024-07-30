export const _base64Chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.split('');

export const _base64CharMaps = _base64Chars.reduce(
  (prev, cur, index) => ({ ...prev, [cur]: index }),
  {}
);

export const _regexp_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;

export const _regexp_btou =
  /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;

export const _regexp_chars = /[^A-Za-z0-9\+\/]/g;

export const _regexp_space = /\s+/g;

export const _regexp_base64 =
  /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

export const _hasBuffer = typeof Buffer === 'function';

export const _hasBtoa = typeof btoa === 'function';

export const _hasAtob = typeof atob === 'function';

export const _textEncoder =
  typeof TextEncoder === 'function' ? new TextEncoder() : undefined;

export const _textDecoder =
  typeof TextDecoder === 'function' ? new TextDecoder() : undefined;

export const _fromCharCode = String.fromCharCode.bind(String);
