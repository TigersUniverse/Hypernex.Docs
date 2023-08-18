---
sidebar_position: 0
---

# parse

Parses a JSON string into a JavaScript object.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
text | string | The JSON String to parse

The following example parses a json string and gets the first value of the object

**Lua**
```js
let jsonString = "\"{\"LetterOne\": \"a\", \"LetterTwo\": \"b\"}\""
let j = JSON.parse(jsonString)
for (let key in j){
    print(j[key])
    break
}
// Expected Output: a
```