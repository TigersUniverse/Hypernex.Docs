# RemoveExtraneousObject

:::info

This method is only available on **LocalAvatarScripts**

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
if(LocalAvatar.IsExtraneousObjectPresent(key))
    LocalAvatar.RemoveExtraneousObject(key)
```

**Lua**
```lua
local key = "oldAvatarData"
if LocalAvatar.IsExtraneousObjectPresent(key) then
    LocalAvatar.RemoveExtraneousObject(key)
end
```