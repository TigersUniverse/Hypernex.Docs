# SetParameter

:::info

This method is only available on **LocalAvatarScripts**

:::

Sets the value of a `bool`, `int`, or `float` parameter.

**Overload 1 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
name | string | The name of the parameter
value | bool | The value to set for the bool parameter

**Overload 2 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
name | string | The name of the parameter
value | int | The value to set for the int parameter

**Overload 3 Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
name | string | The name of the parameter
value | float | The value to set for the float parameter

:::caution

`Trigger` parameter types are not supported, and won't be by SetParameter.

:::

The following example sets all three different types of parameters to some example value

**JavaScript**
```js
const boolValue = true
// Try and keep int values between 0 and 255
const intValue = 5
// Try and keep float values to two decimals or less and between -1 and 1
const floatValue = 0.52
LocalAvatar.SetParameter("toggle", boolValue)
LocalAvatar.SetParameter("numberRate", intValue)
LocalAvatar.SetParameter("weight", floatValue)
```

**Lua**
```lua
local boolValue = true
-- Try and keep int values between 0 and 255
local intValue = 5
-- Try and keep float values to two decimals or less and between -1 and 1
local floatValue = 0.52
LocalAvatar.SetParameter("toggle", boolValue)
LocalAvatar.SetParameter("numberRate", intValue)
LocalAvatar.SetParameter("weight", floatValue)
```