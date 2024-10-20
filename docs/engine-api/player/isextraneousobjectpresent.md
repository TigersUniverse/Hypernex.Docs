# IsExtraneousObjectPresent

Checks if there is an extraneous object with a specific key.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
key | `string` | The Extraneous Object to look for

The following example looks for a "goal" Extraneous Object, then prints it. Assume the value is a number.

**JavaScript**
```js
let Players = instance.GetHandler("Players")
let LocalPlayer = Players.LocalPlayer
if(LocalPlayer.IsExtraneousObjectPresent("goal"))
    print("The user defined goal is: " + LocalPlayer.GetExtraneousObject("goal"))
```

**Lua**
```lua
local Players = instance.GetHandler("Players")
local LocalPlayer = Players.LocalPlayer
if LocalPlayer.IsExtraneousObjectPresent("goal") then
    print("The user defined goal is: "..tostring(LocalPlayer.GetExtraneousObject("goal")))
end
```