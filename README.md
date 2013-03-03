## Warning

This plugin is still an early relese and not well tested. All feedback is appreciated.

an-toolbar
==========

A jQuery plugin to make a toolbar responsive and collapse in a smart way.

## Dependency

-   [jQuery](https://github.com/jquery/jquery)
-   [Twitter Bootstrap](http://twitter.github.com/bootstrap/)

## Usage

Download the plugin and include the following in your HTML file:

````html
  <script src="path/to/js/jquery.min.js"></script>
  <script src="path/to/js/bootstrap.min.js"></script>
  <script src="path/to/js/jquery.an-toolbar.min.js"></script>
````

Make sure you use the right [toolbar](http://twitter.github.com/bootstrap/components.html#buttonGroups) syntax. The following is an example of how the toolbar HTML markup may look like.

````html
<div id="an-toolbar" class="btn-toolbar">
  <div class="btn-group">
    <button class="btn"><i class="icon-"></i> Create</button>
    <button class="btn"><i class="icon-"></i> Update</button>
    <button class="btn"><i class="icon-trash"></i> Delete</button>
    <button class="btn"><i class="icon-refresh"></i> Refresh</button>
    <button class="btn"><i class="icon-cog"></i> Settings</button>
  </div>
  <div class="btn-group">
    <button class="btn">Left</button>
    <button class="btn">Middle</button>
    <button class="btn">Right</button>
  </div>
  <button class="btn"><i class="icon-search"></i> Search</button>
</div>
````
And lastly just include the following in your HTML file:

````javascript
$('#an-toolbar').anToolbar();
````

## Options
Bellow are all options represented and their default values. 

````javascript
$('#an-toolbar').anToolbar({
  // Adds css class to item when moved into dropdown
  addClass: '',

  // Removes css class to item when moved into dropdown
  removeClass: 'btn',

  // Set position of dropdown
  dropdownPosition: 'right',

  // Decide if buttons should be moved from last or first
  move: 'last'
});
````

## Contact

If you have any questions or suggestions, send them to [@Adam](http://twitter.com/Adam_Nyberg)
