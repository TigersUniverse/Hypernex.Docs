# GetPlayerRoot

Returns the Root Item of a Player. This is where the LocalPlayer or NetAvatar component would be attached to.

:::note

+ Returns an [Item](./../item/index.md) for **LocalScripts**
+ Returns a [ReadonlyItem](./../readonlyitem/index.md) for **LocalAvatarScripts**

:::

The following code positions the root avatar at a specified location. In this example, we assume the script is a **LocalScript**.

It would be better to use [LocalAvatar.TeleportTo()](./teleportto.md) for this scenario.

**JavaScript**
```js
let position = new float3(0, 10, 0)
let root = LocalAvatar.GetPlayerRoot()
root.Position = position
```

**Lua**
```lua
local position = float3()
position.x = 0
position.y = 10
position.z = 0
local root = LocalAvatar.GetPlayerRoot()
root.Position = position
```