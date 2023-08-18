---
sidebar_position: 0
---

# parse

Parses a JSON string into a lua table.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
jsonString | string | The JSON String to parse

The following example parses a json string and gets the first value of the object

**Lua**
```lua
local jsonString = "\"{\"LetterOne\": \"a\", \"LetterTwo\": \"b\"}\""
local j = json.parse(jsonString)
for _, k in pairs(j) do
    print(k)
    break
end
-- Expected Output: a
```