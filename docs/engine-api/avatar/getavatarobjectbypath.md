# GetAvatarObjectByPath

The GetAvatarObjectByPath method will return an [Item](./../item/index.md) at a specified path, relative to the Avatar root.

:::note

The Item will only be writable for Avatar Owners in LocalAvatarScripts.

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
path | `string` | The path of the object

In the example below, the LocalAvatarScript finds an item at `Hips/Spine/Chest/Head/Glasses` and positions them up by 1 unit

**JavaScript**
```js
let item = instance.GetHandler("Players").LocalPLayer.GetAvatarObjectByPath("Hips/Spine/Chest/Head/Glasses")
let position = item.Position
let newPosition = new float3(position.x, position.y + 1, position.z)
item.Position = newPosition
```

**Lua**
```lua
local item = instance.GetHandler("Players").LocalPLayer.GetAvatarObjectByPath("Hips/Spine/Chest/Head/Glasses")
local position = item.Position
local newPosition = float3()
newPosition.x = position.x
newPosition.y = position.y + 1
newPosition.z = position.z
item.Position = newPosition
```