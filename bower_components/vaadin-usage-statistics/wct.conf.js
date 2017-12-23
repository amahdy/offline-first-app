var argv = require('yargs').argv;

module.exports = {
  registerHooks: function(context) {
    if (argv.env === 'saucelabs') {
      context.options.plugins.sauce.browsers = [
      'Windows 10/microsoftedge@15',
      'Windows 10/internet explorer@11',
      'macOS 10.12/safari@11.0',
      'Windows 10/chrome@62',
      'Windows 10/firefox@57'
    ];
    }
  }
};
