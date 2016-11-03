/**
 * The following string defines the RAMLError class, instantiated by the
 * validator when an error occurs.
 */
module.exports = `
const REPLACE_MESSAGE_TEMPLATE = /\{([^\}]+)}/g;

function RAMLError(path, message, _messageVariables) {
  var messageVariables = _messageVariables || {};

  Object.defineProperty(this, 'path', {
    get: function() {
      return path;
    },
  });

  Object.defineProperty(this, 'message', {
    get: function() {
      return message.replace(REPLACE_MESSAGE_TEMPLATE, function(match) {
        return messageVariables[match.slice(2,-1)] || '';
      });
    },
  });
}
`;
