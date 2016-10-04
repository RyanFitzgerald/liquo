# Liquo

Liquo is a jQuery-based image gallery that allows filtering, randomizing on load, and setting the start category. Liquo allows you to have full control over the styling of the gallery and it's associated buttons.
The website for this plugin can be found [here](http://ryanfitzgerald.github.io/liquo/), which includes docs and a demo.

## Installation & Setup

All the installation that is required is simply including the compiled CSS and JS file in your document (minified or not) and then initializing it.

Top of page:
```html
<link rel="stylesheet" type="text/css" href="path/to/liquo.css">
```

Bottom of page:
```html
<script src="path/to/liquo.js"></script>
```

Finally, initialize it:
```javascript
$('#some-gallery').liquo({
  menu: "#some-menu"
);
```

The basic structure of a Liquo gallery is as follows:

```html
<div id="gallery-menu">
	<a href="#" data-liquo="all">All</a>
	<a href="#" data-liquo="1">Category 1</a>
	<a href="#" data-liquo="2">Category 2</a>
	<a href="#" data-liquo="3">Category 3</a>
</div>
<ul id="gallery">
	<li data-liquo="1">
		<img src="images/item1.jpg" />
	</li>
	<li data-liquo="2">
		<img src="images/item2.jpg" />
	</li>
	<li data-liquo="3">
		<img src="images/item3.jpg" />
	</li>
</ul>
```
The two important portions are the #gallery-menu and #gallery. The names can change, but both are required. The first, #gallery-menu, is the wrapper for the category buttons / links. The second, #gallery, is the ID for the ul that holds all the li elements.

Once you create the ul with all the li elements you want, simply add data-liquo to each with a value. Ensure that all images in the same category have the same value. Finally, also apply data-liquo to each of the links in the menu wrapper. This works by selecting all elements with the same data-liquo once the gallery-menu anchor is clicked. Also, if you want an option for all elements to be visible, ensure there is a menu item with data-liquo="all". See the [demo](http://ryanfitzgerald.github.io/liquo/demo.html) page for a larger example.

## Configuration

There are a number of parameters you may override, or simply use the default provided ones (with the exception of menu, which must be provided):

Parameter | Description | Default
---- | ----------- | -------
menu | This paramater is required and tells Liquo where the image category buttons / links can be found | null
start | This parameter sets the starting category and must correspond to a data-liquo value if used | all
random | 	This parameter randomizes the gallery every time the page is loaded if the order does not matter to you | false

## Example Usage

Another example usage of Liquo using it's available options is as follows:

```javascript
$("#gallery").liquo({
	menu: "#gallery-menu",
	start: "2",
	random: true
});
```
## License

MIT License (Free - see LICENSE.md)
