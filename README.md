# jQuery Sidebar
A stupid simple sidebar jQuery plugin.

[![](http://i.imgur.com/L32Y3zw.png)](http://jillix.github.io/jQuery-sidebar/)

## Available on CDN! :ship:
*jQuery-Sidebar* is available on [CDNJS](https://cdnjs.com/libraries/jquery-sidebar) and you can use it like this:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-sidebar/3.0.0/jquery.sidebar.min.js"></script>
```

## Usage

Include the script file into your HTML page:

```html
...
<!-- Include jQuery -->
<script src="path/to/jquery.min.js"></script>
<!-- Include jQuery Sidebar -->
<script src="path/to/jquery.sidebar.min.js"></script>
<!--
 or from cdnjs:
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-sidebar/3.0.0/jquery.sidebar.min.js"></script>
-->
...
<div class="sidebar left">Hello World</div>
<div class="sidebar right">I am on right!</div>
<div class="sidebar top">I am on top!</div>
<div class="sidebar bottom">I am on bottom!</div>
...
<script>
    // Sidebar on left (default)
    $(".sidebar.left").sidebar().trigger("sidebar:open");

    // Sidebar on right side
    $(".sidebar.right").sidebar({side: "right"});

    // Sidebar on top side
    $(".sidebar.top").sidebar({side: "top"});

    // Sidebar on bottom side
    $(".sidebar.bottom").sidebar({side: "bottom"});
</script>
...
```

## Documentation
### `sidebar(options)`
Initialize sidebar on selected elements.

```js
$(".my-sidebar").sidebar({...});
```

After the call above, you can programatically open/close/toggle the sidebar using:

```js
$(".my-sidebar").trigger("sidebar:open");
$(".my-sidebar").trigger("sidebar:close");
$(".my-sidebar").trigger("sidebar:toggle");
```

After the sidebar is opened/closed, `sidebar:opened`/`sidebar:closed` event is emitted.

```js
$(".my-sidebar").on("sidebar:opened", function () {
   // Do something on open
});

$(".my-sidebar").on("sidebar:closed", function () {
   // Do something on close
});
```

#### Params
- **Object** `options`: An object that will be merged with the default options.
 - `speed` (Number): animation speed (default: `200`)
 - `side` (String): left|right|top|bottom (default: `"left"`)
 - `isClosed` (Boolean): A boolean value indicating if the sidebar is closed or not (default: `false`).
 - `close` (Boolean): If `true`, the sidebar will be closed by default.
 - `range` (Object): An object containing:
   - `left` (Array): An array with the min and max left values (default: `[-width, 0]`).
   - `right` (Array): An array with the min and max right values (default: `[-width, 0]`).
   - `top` (Array): An array with the min and max top values (default: `[-height, 0]`).
   - `bottom` (Array): An array with the min and max bottom values (default: `[-height, 0]`).

#### Return
- **jQuery** The jQuery elements that were selected.



## Changelog
To see the versions and the changes between them go to [releases page](https://github.com/jillix/jQuery-sidebar/releases).

## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
