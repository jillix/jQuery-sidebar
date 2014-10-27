# jQuery-sidebar
A stupid simple sidebar jQuery plugin.

## Installation
Run the following commands to download and install the application:

```sh
$ git clone https://github.com/jillix/jQuery-sidebar.git jQuery-sidebar
$ cd jQuery-sidebar
$ npm install
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
