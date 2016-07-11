
module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*_spec.js'
    ],
    plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/**/*_spec.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: [ 'spec'],

  })
}
