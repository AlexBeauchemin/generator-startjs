'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var StartjsGenerator = module.exports = function StartjsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(StartjsGenerator, yeoman.generators.Base);

StartjsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      name: 'websiteName',
      message: 'How is the website called?'
    },
    {
      name: 'jqueryLatest',
      message: 'Will you use jQuery 2.x and drop support for old IE?',
      type: 'confirm',
      default: false
    }
];

  this.prompt(prompts, function (props) {
    this.websiteName = props.websiteName;
    this.jqueryVersion = '1.10.2';
    if(props.jqueryLatest)
        this.jqueryVersion = 'latest'

    cb();
  }.bind(this));
};

StartjsGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/assets');
  this.mkdir('app/assets/css');
  this.mkdir('app/assets/css/src');
  this.mkdir('app/assets/css/src/helpers');
  this.mkdir('app/assets/css/dest');
  this.mkdir('app/assets/js');
  this.mkdir('app/assets/js/src');
  this.mkdir('app/assets/js/src/views');
  this.mkdir('app/assets/js/vendor');

  this.template('index.html', 'app/index.html');
  this.template('_bower.json', 'bower.json');

  this.copy('favicon.ico', 'app/favicon.ico');
  this.copy('crossdomain.xml', 'app/crossdomain.xml');
  this.copy('apple-touch-icon-precomposed.png', 'app/apple-touch-icon-precomposed.png');
  this.copy('.htaccess', 'app/.htaccess');
  this.copy('.gitignore', 'app/.gitignore');

  this.copy('assets/css/dest/main.css', 'app/assets/css/dest/main.css');
  this.copy('assets/css/src/global.less', 'app/assets/css/src/global.less');
  this.copy('assets/css/src/home.less', 'app/assets/css/src/home.less');
  this.copy('assets/css/src/main.less', 'app/assets/css/src/main.less');
  this.copy('assets/css/src/helpers/helpers.less', 'app/assets/css/src/helpers/helpers.less');
  this.copy('assets/css/src/helpers/normalize.less', 'app/assets/css/src/helpers/normalize.less');
  this.copy('assets/css/src/helpers/vars.less', 'app/assets/css/src/helpers/vars.less');

  this.copy('assets/js/boot.js', 'app/assets/js/boot.js');
  this.copy('assets/js/src/App.js', 'app/assets/js/src/App.js');
  this.copy('assets/js/src/views/View.js', 'app/assets/js/src/views/View.js');
  this.copy('assets/js/src/views/ViewHome.js', 'app/assets/js/src/views/ViewHome.js');

  this.copy('_package.json', 'package.json');
};

StartjsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('.bowerrc', '.bowerrc');
  this.copy('.gitignore', '.gitignore');
  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('README.md', 'README.md');
};
