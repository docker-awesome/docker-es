const formats = {
  hm: 'HH:mm',
  hms: 'HH:mm:ss',
  ym: 'YYYY-MM',
  ymd: 'YYYY-MM-DD',
  ymdhms: 'YYYY-MM-DD HH:mm:ss'
} as const;

export type Formats = typeof formats;

export default formats;
