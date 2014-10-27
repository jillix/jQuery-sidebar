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
$(&quot;.my-sidebar&quot;).sidebar({...});
```

After the call above, you can programatically open&#x2F;close the sidebar using:

```js
$(&quot;.my-sidebar&quot;).trigger(&quot;sidebar:open&quot;);
$(&quot;.my-sidebar&quot;).trigger(&quot;sidebar:close&quot;);
```

After the sidebar is opened&#x2F;closed, `sidebar:opened`&#x2F;`sidebar:closed` event is emitted.

```js
$(&quot;.my-sidebar&quot;).on(&quot;sidebar:opened&quot;, function () {
   &#x2F;&#x2F; Do something on open
});

$(&quot;.my-sidebar&quot;).on(&quot;sidebar:closed&quot;, function () {
   &#x2F;&#x2F; Do something on close
});
```

### Params
- **Object** `options`: An object that will be merged with the default options.
 - `speed`: animation speed (default: 200)
 - `side`: left|right|top|bottom (default: &quot;left&quot;)

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
