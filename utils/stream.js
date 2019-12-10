function readBody(req, res, next) {
  let body = '';

  req.setEncoding('utf-8');

  req.on('data', (part) => {
    body += part;
  });

  req.on('end', () => {
    // eslint-disable-next-line no-underscore-dangle
    req.__body = body
      .split('&')
      .map((subString) => subString.split('=').map(decodeURIComponent))
      .reduce((result, pair) => {
        const [
          key,
          value,
        ] = pair;

        // eslint-disable-next-line no-param-reassign
        result[key] = value;

        return result;
      }, {});

    next();
  });
}

module.exports = {
  readBody,
};
