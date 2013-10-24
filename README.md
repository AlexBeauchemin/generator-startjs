# generator-startjs [![Build Status](https://secure.travis-ci.org/AlexBeauchemin/generator-startjs.png?branch=master)](https://travis-ci.org/AlexBeauchemin/generator-startjs)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Yeoman is a tool that lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-startjs from npm, run:

```
$ npm install -g generator-startjs
```

Finally, initiate the generator:

```
$ yo startjs
```

### Run grunt
```
$ grunt
```
If you get an error, manually do a bower install and npm install before running grunt 
```
$ bower install
$ npm install
$ grunt
```

And now you are ready to go.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

### StartJS

StartJS is a small, clean and structured javascript flow using Requirejs and Mootools Classes.

Using data-view="ViewName" in the html will load the right js (js/src/views/View[ViewName].js). Every views will extend View.js, so put functions that will be used everywhere in this one.

The same approach can be used to create models ou modules, allowing clean javascript structure.

### Tools

Requirejs: A modular script loader used to load javascript file in the browser only when needed, grouped by module

Mootools Core + jQuery clas mutators: Used to create class-like javascript files.

Bower: Used to install javascript files with their dependencies

Grunt: Used for automation (see http://gruntjs.com/)

Less: Create dynamic css

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
