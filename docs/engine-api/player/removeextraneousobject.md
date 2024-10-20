# RemoveExtraneousObject

:::info

This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.

:::

Removes an object by key from the Avatar's ExtraneousObjects dictionary.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
key | string | The key of the Object to remove

The following example checks if a User has the ExtraneousObject "oldAvatarData", and removes it.

**JavaScript**
```js
let key = "oldAvatarData"
let Players = instance.GetHandler("Players")
let LocalPlayer = Players.LocalPlayer
if(LocalPlayer.IsExtraneousObjectPresent(key))
    LocalPlayer.RemoveExtraneousObject(key)
```

**Lua**
```lua
local key = "oldAvatarData"
local Players = instance.GetHandler("Players")
local LocalPlayer = Players.LocalPlayer
if LocalPlayer.IsExtraneousObjectPresent(key) then
    LocalPlayer.RemoveExtraneousObject(key)
end
```