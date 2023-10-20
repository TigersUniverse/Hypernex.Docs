# Rotate

:::info

This method is only available on **LocalScripts**

:::

Rotates the LocalPlayer to a specified rotation.

:::note

This does not add to your rotation!

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
rotation | [float4](./../float4/) | The rotation value to rotate to

The following rotates your character by 45 degrees, simulating a Snap Turn in VR.

**JavaScript**
```js
let avatarRoot = LocalAvatar.GetRootItem()
let avatarRotation = avatarRoot.Rotation
let newRotation = new float4(avatarRotation.x, avatarRotation.y + 45, avatarRotation.z, avatarRotation.w)
avatarRoot.Rotation = newRotation
```

**Lua**
```lua
local avatarRoot = LocalAvatar.GetRootItem()
local avatarRotation = avatarRoot.Rotation
local newRotation = float4()
newRotation.x = avatarRotation.x
newRotation.y = avatarRotation.y + 45
newRotation.z = avatarRotation.z
newRotation.w = avatarRotation.w
avatarRoot.Rotation = newRotation
```