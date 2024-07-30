import {
  _base64Chars,
  _fromCharCode,
  _hasBtoa,
  _hasBuffer,
  _regexp_utob,
  _textEncoder
} from './constant';

const _btoaPolyfill = (str: string) => {
  let c0: number;
  let c1: number;
  let c2: number;
  let asc: string = '';
  for (let i = 0; i < str.length; ) {
    if (
      (c0 = str.charCodeAt(i++)) > 255 ||
      (c1 = str.charCodeAt(i++)) > 255 ||
      (c2 = str.charCodeAt(i++)) > 255
    ) {
      throw new TypeError('Invalid character found.');
    }
    const u32 = (c0 << 16) | (c1 << 8) | c2;
    asc +=
      _base64Chars[(u32 >> 18) & 63] +
      _base64Chars[(u32 >> 12) & 63] +
      _base64Chars[(u32 >> 6) & 63] +
      _base64Chars[u32 & 63];
  }
  const pad = str.length % 3;
  return pad ? asc.slice(0, pad - 3) + '==='.substring(pad) : asc;
};

// binary to Base64-encoded string
const _btoa = (str: string) => {
  if (_hasBtoa) return btoa(str);
  if (_hasBuffer) return Buffer.from(str, 'binary').toString('base64');
  return _btoaPolyfill(str);
};

const _fromUint8Array = (u8a: Uint8Array) => {
  if (_hasBuffer) return Buffer.from(u8a).toString('base64');

  const maxArgs = 0x1000;
  const strs: string[] = [];
  for (let i = 0, l = u8a.length; i < l; i += maxArgs) {
    strs.push(_fromCharCode.apply(null, u8a.subarray(i, i + maxArgs)));
  }
  return _btoa(strs.join(''));
};

// UTF-8 to UTF-16 string
const _utob = (str: string): string => {
  return str.replace(_regexp_utob, (match: string) => {
    if (match.length < 2) {
      const charCode = match.charCodeAt(0);
      if (charCode < 0x80) return match;
      if (charCode < 0x800) {
        return (
          _fromCharCode(0xc0 | (charCode >>> 6)) +
          _fromCharCode(0x80 | (charCode & 0x3f))
        );
      }
      return (
        _fromCharCode(0xe0 | ((charCode >>> 12) & 0x0f)) +
        _fromCharCode(0x80 | ((charCode >>> 6) & 0x3f)) +
        _fromCharCode(0x80 | (charCode & 0x3f))
      );
    }

    const charCode =
      0x10000 +
      (match.charCodeAt(0) - 0xd800) * 0x400 +
      (match.charCodeAt(1) - 0xdc00);
    return (
      _fromCharCode(0xf0 | ((charCode >>> 18) & 0x07)) +
      _fromCharCode(0x80 | ((charCode >>> 12) & 0x3f)) +
      _fromCharCode(0x80 | ((charCode >>> 6) & 0x3f)) +
      _fromCharCode(0x80 | (charCode & 0x3f))
    );
  });
};

const _encodeURIComponent = (str: string) => {
  return str
    .replace(/=/g, '')
    .replace(/[+\/]/g, (m0) => (m0 == '+' ? '-' : '_'));
};

const _encode = (str: string) => {
  if (_hasBuffer) return Buffer.from(str, 'utf8').toString('base64');
  if (_textEncoder) return _fromUint8Array(_textEncoder.encode(str));
  return _btoa(_utob(str));
};

// UTF-8-encoded to Base64 string
const encode = (str: string, safe: boolean = false): string => {
  if (safe) return _encodeURIComponent(_encode(str));
  return _encode(str);
};

export default encode;
