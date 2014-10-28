# jQuery-sidebar
A stupid simple sidebar jQuery plugin.

## Usage

Include the script file into your HTML page:

```html
...
<script src="path/to/jQuery-sidebar.min.js"></script>
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

## `sidebar(options)`
Initialize sidebar on selected elements.

```js
$(".my-sidebar").sidebar({...});
```

After the call above, you can programatically open/close the sidebar using:

```js
$(".my-sidebar").trigger("sidebar:open");
$(".my-sidebar").trigger("sidebar:close");
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

### Params
- **Object** `options`: An object that will be merged with the default options.
 - `speed`: animation speed (default: 200)
 - `side`: left|right|top|bottom (default: "left")

### Return
- **jQuery** The jQuery elements that were selected.

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
