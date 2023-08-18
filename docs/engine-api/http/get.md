---
sidebar_position: 0
---

# Get

Sends a GET request to the supplied URL.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
url | string | The URL to send the GET request to

The following example sends a GET request to `https://example.com` and prints the page's HTML

**JavaScript**
```js
let http = new Http()
let result = http.Get("https://example.com")
print(result)
```

**Lua**
```lua
local http = Http()
local result = http.Get("https://example.com")
print(result)
```