## Warning

This plugin is still an early relese and not well tested. All feedback is appreciated.

an-toolbar
==========

A jQuery plugin to make a toolbar responsive and collapse in a smart way.

## Demo

To see the plugin in action visit the plugin [site](http://adamnyberg.se/project/an-toolbar).

## Dependency

-   [jQuery](https://github.com/jquery/jquery)
-   [Twitter Bootstrap](http://twitter.github.com/bootstrap/)

## Install

Download the plugin and include the following in your HTML file:

1. Include required javascript.

````html
  <script src="path/to/js/jquery.min.js"></script>
  <script src="path/to/js/bootstrap.min.js"></script>
  <script src="path/to/js/jquery.an-toolbar.min.js"></script>
````

2. Make sure you use the right toolbar syntax. The following is an example of how the toolbar HTML markup may look like.

````html
  <div class="container-of-toolbar">
    <ul>
      <li><a href="#" class="btn">Create</a></li>
      <li><a href="#" class="btn">Update</a></li>
      <li><a href="#" class="btn">Delete</a></li>
      <li><a href="#" class="btn">Refresh</a></li>
      <li><a href="#" class="btn">Settings</a></li>
    </ul>
  </div>
````

## Usage

To use it just include the following in your HTML file:

````javascript
$('.container-of-toolbar').anToolbar();
````

## Contact

If you have any questions or suggestions, send them to [@Adam](http://twitter.com/Adam_Nyberg)