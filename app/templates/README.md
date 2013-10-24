startjs
=======

StartJS is a small, clean and structured javascript flow using Requirejs and Mootools Classes.

Using data-view="ViewName" in the html will load the right js (js/src/views/View[ViewName].js). Every views will extend View.js, so put functions that will be used everywhere in this one.

The same approach can be used to create models ou modules, allowing clean javascript structure.

tools
=======
Requirejs: A modular script loader used to load javascript file in the browser only when needed, grouped by module
Mootools Core + jQuery clas mutators: Used to create class-like javascript files.
Bower: Used to install javascript files with their dependencies
Grunt: Used for automation (see http://gruntjs.com/)
Less: Create dynamic css


grunt
=======
### using grunt to:
  - compile less files
  - minify css
  - jshint
  - auto prefix css3
  - watch js/css files and recompile on the fly


### how to use grunt:

#### move to your app folder

    cd path/to/project/folder

#### install dependencies

    npm install

#### run grunt

    grunt


### more info on grunt:
  - http://gruntjs.com/getting-started



bower
=======
### using bower to install js plugins/dependencies

    bower install [plugin name]

