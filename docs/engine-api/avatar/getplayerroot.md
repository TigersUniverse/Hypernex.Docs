# GetPlayerRoot

Returns the Root Item of a Player. This is where the LocalPlayer or NetAvatar component would be attached to.

:::note

The Item will only be writable for **LocalScripts**.

:::

The following code positions the root avatar at a specified location. In this example, we assume the script is a **LocalScript**.

It would be better to use [Player.TeleportTo()](./../player/teleportto.md) for this scenario.

**JavaScript**
```js
let position = new float3(0, 10, 0)
let root = instance.GetHandler("Player").LocalPlayer.Avatar.GetPlayerRoot()
root.Position = position
```

**Lua**
```lua
local position = float3()
position.x = 0
position.y = 10
position.z = 0
local root = instance.GetHandler("Player").LocalPlayer.Avatar.GetPlayerRoot()
root.Position = position
```