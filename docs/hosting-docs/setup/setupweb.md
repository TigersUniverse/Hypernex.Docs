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

Next, locate the `scripts/HypernexAPI.js` file, and you will notice the constant section which will look something like the following,

```js
const API_CONFIGURATION = {
    "OverrideAPI": false,
    "IsSecure": true,
    "APIDomain": ""
}
```

If you need to configure this (which should only be if your dashboard domain is not the same as the API domain), then you can do the following

1. Set `OverrideAPI` to `true`
2. Set `IsSecure` to whether or not you use HTTPS
3. Set `APIDomain` to the domain of the API server
    + For example `play.hypernex.dev`

Finally, (re)start the API server.