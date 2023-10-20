# TeleportTo

:::info

This method is only available on **LocalScripts**

:::

Teleports your LocalPlayer to a specified world position

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ----
position | [float3](./../float3/) | The worldPosition to teleport to

The following example teleports the player to an Item's position

**JavaScript**
```js
let item = World.GetItemInRoot("area2")
LocalAvatar.TeleportTo(item.Position)
```

**Lua**
```lua
local item = World.GetItemInRoot("area2")
LocalAvatar.TeleportTo(item.Position)
```