import {
  _base64CharMaps,
  _fromCharCode,
  _hasAtob,
  _hasBuffer,
  _regexp_base64,
  _regexp_btou,
  _regexp_chars,
  _regexp_space,
  _textDecoder
} from './constant';

const _pureBase64 = (s: string) => s.replace(_regexp_chars, '');

const _U8Afrom =
  typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it: Buffer) => new Uint8Array(Array.prototype.slice.call(it, 0));

const _atobPolyfill = (str: string) => {
  let base64 = str.replace(_regexp_space, '');
  if (!_regexp_base64.test(base64)) throw new TypeError('Invalid base64.');
  base64 += '=='.slice(2 - (base64.length & 3));
  let bin = '';
  let r1: number;
  let r2: number;
  for (let i = 0; i < base64.length; ) {
    const u24 =
      (_base64CharMaps[base64.charAt(i++)] << 18) |
      (_base64CharMaps[base64.charAt(i++)] << 12) |
      ((r1 = _base64CharMaps[base64.charAt(i++)]) << 6) |
      (r2 = _base64CharMaps[base64.charAt(i++)]);

    if (r1 === 64) {
      bin += _fromCharCode((u24 >> 16) & 255);
    } else if (r2 === 64) {
      bin += _fromCharCode((u24 >> 16) & 255, (u24 >> 8) & 255);
    } else {
      bin += _fromCharCode((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255);
    }
  }
  return bin;
};

// Base64-encoded to binary string
const _atob = (str: string) => {
  if (_hasAtob) return atob(_pureBase64(str));
  if (_hasBuffer) return Buffer.from(str, 'base64').toString('binary');
  return _atobPolyfill(str);
};

const _toUint8Array = (str: string) => {
  if (_hasBuffer) return _U8Afrom(Buffer.from(str, 'base64'));
  return _U8Afrom(
    _atob(str)
      .split('')
      .map((item) => item.charCodeAt(0))
  );
};

// UTF-16 to UTF-8 string
const _btou = (str: string) => {
  return str.replace(_regexp_btou, (match: string) => {
    switch (match.length) {
      case 4: {
        const cp =
          ((0x07 & match.charCodeAt(0)) << 18) |
          ((0x3f & match.charCodeAt(1)) << 12) |
          ((0x3f & match.charCodeAt(2)) << 6) |
          (0x3f & match.charCodeAt(3));
        const offset = cp - 0x10000;
        return (
          _fromCharCode((offset >>> 10) + 0xd800) +
          _fromCharCode((offset & 0x3ff) + 0xdc00)
        );
      }
      case 3: {
        return _fromCharCode(
          ((0x0f & match.charCodeAt(0)) << 12) |
            ((0x3f & match.charCodeAt(1)) << 6) |
            (0x3f & match.charCodeAt(2))
        );
      }
      default: {
        return _fromCharCode(
          ((0x1f & match.charCodeAt(0)) << 6) | (0x3f & match.charCodeAt(1))
        );
      }
    }
  });
};

const _decodeURIComponent = (str: string) => {
  return _pureBase64(str.replace(/[-_]/g, (it) => (it == '-' ? '+' : '/')));
};

const _decode = (str: string) => {
  if (_hasBuffer) return Buffer.from(str, 'base64').toString('utf8');
  if (_textDecoder) return _textDecoder.decode(_toUint8Array(str));
  return _btou(_atob(str));
};

// Base64 to UTF-8 string.
const decode = (str: string): string => _decode(_decodeURIComponent(str));

export default decode;
