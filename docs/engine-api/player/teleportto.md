# TeleportTo

:::info

This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.

:::

Teleports your LocalPlayer to a specified world position

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ----
position | [float3](./../float3/index.md) | The worldPosition to teleport to

The following example teleports the player to an Item's position

**JavaScript**
```js
let World = instance.GetHandler("World")
let Players = instance.GetHandler("Players")

let item = World.GetItemInRoot("area2")
Players.LocalPlayer.TeleportTo(item.Position)
```

**Lua**
```lua
local World = instance.GetHandler("World")
local Players = instance.GetHandler("Players")

local item = World.GetItemInRoot("area2")
Players.LocalPlayer.TeleportTo(item.Position)
```