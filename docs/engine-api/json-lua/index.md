# JSON (Lua)

:::info

The JSON module in lua should be accessed from the static object `json`

:::

The JSON module provides useful JSON tools specifically for lua.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
[parse](parse) | Table | Parses a JSON string into a lua table
[serialize](serialize) | string | Serializes a Table into a JSON string
[isNull](isnull) | bool | Returns true if the value specified is a null read from a json
[null](null) | object | Returns a null object for Tables to be represented correctly in JSON