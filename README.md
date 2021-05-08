Galley Editor
=============

Links to interactive:

* **Production**: [https://interactives.ap.org/galley-editor/][prod]
* **Preview**: [https://interactives-preview.inside.ap.org/interactives/galley-editor/][preview]

## Development

Run this interactive in development by running:

```shell
yarn start
```

This will open a demo page (`/example.html`) where you can see the interactive
embedded in a few different contexts. You can navigate to the root URL `/`
instead to view the interactive directly.

## Embedding

Embed this interactive with dynamic resizing with the following markup once the
interactive has been deployed to production:

```html
<embed class="ap-embed" src="//interactives.ap.org/galley-editor/" />
<script defer src="//interactives.ap.org/galley-editor/mount.js" type="text/javascript"></script>
```

[prod]: https://interactives.ap.org/galley-editor/
[preview]: https://interactives-preview.inside.ap.org/interactives/galley-editor/
