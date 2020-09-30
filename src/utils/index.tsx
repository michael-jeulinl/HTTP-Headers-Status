/**
 * Regex to check if http/https url.
 *
 * @todo would use external lib instead.
 * @return Boolean
 */
const isURL = (url: string): Boolean => {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  return (url.match(regex) ? true : false);
};


export default {
  isURL,
};
