const cloudfrontPOP = require('./cloudfrontPOP.json');

/*
 * Regex to check if http/https url
 * @return Boolean
 */
const isURL = url => {
  if (!url) return false;

  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  return url.match(regex);
};

/*
 * Transform x-cache information to compact form
 * @return 'HIT', 'MISS', 'ERROR', '?' if unknown
 */
const xCacheToStr = xCache => {
  if (!xCache) return '-';
  if (xCache.substring(0, 3) === 'Hit') return 'HIT';
  if (xCache.substring(0, 4) === 'Miss') return 'MISS';
  if (xCache.substring(0, 5) === 'Error') return 'ERROR';
  return '-';
};

/*
 * Extract city from x-amz-cf-pop code
 * @return String city if found, '?' otherwise
 */
const codeToCloudfrontPOP = code => {
  const cloudfront = cloudfrontPOP[code] || {};
  return cloudfront.City || '-';
};

/*
 * decodeHeader Transofrms the http header into debug object
 * @return {
 *  poweredBy: string,
 *  statusCode: integer,
 *  serverType: string,
 *  secure: boolean,
 *  cacheStatus: string,
 *  awsOrigin: string,
 * }
 */
const decode = res => {
  const header = res.headers;
  const info = {};
  info.poweredBy = header['x-powered-by'];
  info.statusCode = res['status'];
  info.serverType = header['server'];
  info.secure = header['strict-transport-security'] ? true : false;
  info.cacheStatus = xCacheToStr(header['x-cache']);
  info.awsOrigin = codeToCloudfrontPOP(header['x-amz-cf-pop']);

  return info;
};

module.exports = {
  decode,
  isURL,
};
