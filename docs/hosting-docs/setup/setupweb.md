---
sidebar_position: 1
---

# Web Setup

This guide will show you how to set up the Website to be used with the Hypernex.API server.

## Prerequisites

+ A pre-existing Hypernex.API server

## Downloading the Web Files

To setup the API Server, simply download the source code from [Hypernex.Web](https://github.com/TigersUniverse/Hypernex.Web). This can go in any directory you'd like; however, for the example config provided previously, place it in a folder called `Web` in the same parent directory of your API directory.

## Configuration

Configure your API server's `WebRoot` property to make sure it points to your Web directory (where `index.html` is).

Next, locate the `scripts/HypernexAPI.js` file, and edit the following constants,

```js
export const BASE_URL = "http://localhost/"
const API_VERSION = "v1"
```

Set the `BASE_URL` constant to your base url, and the `API_VERSION` to whatever API version you are using.

Finally, (re)start the API server.