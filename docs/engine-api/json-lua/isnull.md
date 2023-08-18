---
sidebar_position: 2
---

# isNull

Returns true if the value specified is a null read from a json.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
val | object | The JSON value to check if it is null

The following example prints "[value] is null!" if any item in the converted json (see [json.parse(string)](parse) for more information) is null

```lua
local jsonString = "\"{\"one\": 1, \"two\": null, \"three\": \"3\"}\""
local j = json.parse(jsonString)
for _, k in pairs(j) do
    if json.isNull(k) then
        -- don't forget to cast the value to a string!
        print(tostring(k).." is null!")
    end
end
```