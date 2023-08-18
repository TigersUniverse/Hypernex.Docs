# GetExtraneousObject

The GetExtraneousObject method will get an Extraneous Object on an Avatar.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
key | string | The key of the Extraneous Object

The following examples get an Extraneous object, assumed to be an int, and add five to it, then print the result.

**JavaScript**
```js
let number = LocalAvatar.GetExtraneousData("someNumber")
number += 5
print("someNumber is now " + number)
```

**Lua**
```lua
local number = LocalAvatar.GetExtraneousData("someNumber")
number = tonumber(number) + 5
print("someNumber is now "..tostring(number))
```