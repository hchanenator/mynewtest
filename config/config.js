var env = process.env.NODE_ENV || 'development';
var _ = require('lodash');

var conf = {
    greeting: "Hi",
    name: "Herb"
};

var envConf = require('./config.' + env);

var returnConf = _.merge({}, conf, envConf);

// console.log(returnConf);

module.exports = returnConf;
