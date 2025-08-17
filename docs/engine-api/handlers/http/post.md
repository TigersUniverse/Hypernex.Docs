---
sidebar_position: 1
---

# Post

Sends a POST request to the supplied URL.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
url | string | The URL to send the POST request to
data | string | The Data to send to the URL
mediaType | [HttpMediaType](./../../httpmediatype/index.md) | The MediaType of the data provided

The following example gets a User from an example Hypernex API Server (assuming `localhost`), parses the json (see [JSON (Lua)](./../../json-lua/index.md)/[JSON (JavaScript)](./../../json-js/index.md)), then prints the Username.

**JavaScript**
```js
let http = instance.GetHandler("http")
let data = "{\"userid\": \"user_77c834ec-e673-449c-a652-68da917187ff\"}"
let result = http.Post("http://localhost/api/v1/getUser", data, HttpMediaType.ApplicationJSON)
let j = JSON.parse(result)
print(j["Username"])
```

**Lua**
```lua
local http = instance.GetHandler("http")
local data = "{\"userid\": \"user_77c834ec-e673-449c-a652-68da917187ff\"}"
local result = http.Post("http://localhost/api/v1/getUser", data, HttpMediaType.ApplicationJSON)
local j = json.parse(result)
print(result["Username"])
```