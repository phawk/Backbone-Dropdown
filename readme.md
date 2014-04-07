# Backbone.Dropdown

A simple dropdown component for backbone, draws a list of options from a collection and triggers an event when one is selected. This is an alternative to [Chosen](http://harvesthq.github.io/chosen/) with minimal styling so you can make it look however you want.

The API is built for Backbone developers and means you don’t need to shoehorn your data into a `<select>` field.

## Usage

```js
var dropdown = new Backbone.Dropdown({
    // A Backbone collection of models
    collection: my_collection,

    // The field in the model you want to use as the title, defaults to 'title'
    title_field: 'name'
});

$('.my-container').append(dropdown.render().$el);

dropdown.on('select', function(model) {
    // The model that was selected
});
```

## Boilerplate CSS

Use the css in *dropdown.css* as a starting point to customise this menu to your hearts content.

* * *

# MIT License

Copyright (C) 2013 Pete Hawkins

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
