var gulp = require('gulp');
var rg = require('rangle-gulp');
var  gulpSequence = require('gulp-sequence');


gulp.task('pre-mocha',rg.prepareMochaTestCoverage({filesToCover : ['server/**/!(*.spec).js']}));
gulp.task('rgmocha',rg.mocha({ files : [ 'server/**/*.spec.js' ] }));
gulp.task('rgcovermocha',rg.ensureTestCoverage({ coverageDirectory : 'coverage/server' }))
gulp.task('server-ci-rg',gulpSequence('pre-mocha','rgmocha','rgcovermocha'));

gulp.task('rgkarma',rg.karma({ 
    karmaConf:'', //disable karma look up for config file
    files : [
    'client/bower_components/angular/angular.js',
    'client/bower_components/angular-mocks/angular-mocks.js',
    'client/app/**/*.js'],  
    preprocessors : {'./client/app/**/!(*.spec).js':'coverage'},
    frameworks: ['mocha', 'chai'],
    reporters: ['progress', 'coverage'],
    browsers: ['PhantomJS'],
    coverageReporter: {
       reporters: [{type:'json'},{type:'html'},{type:'text-summary'}],
       dir : './coverage/client/'
     }
  }));
gulp.task('rgcoverkarma',rg.ensureTestCoverage({ coverageDirectory : 'coverage/client/*' }));
gulp.task('client-ci-rg',gulpSequence('rgkarma','rgcoverkarma'));
