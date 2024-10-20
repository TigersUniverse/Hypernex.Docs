# Rotate

:::info

This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.

:::

Rotates the LocalPlayer to a specified rotation.

:::note

This does not add to your rotation!

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
rotation | [float4](./../float4/index.md) | The rotation value to rotate to

The following rotates your character by 45 degrees, simulating a Snap Turn in VR.

**JavaScript**
```js
let Players = instance.GetHandler("Players")

let LocalPlayer = Players.LocalPlayer
let Avatar = LocalPlayer.Avatar // assuming this is not null

let avatarRoot = Avatar.GetPlayerRoot()
let avatarRotation = avatarRoot.Rotation
let newRotation = new float4(avatarRotation.x, avatarRotation.y + 45, avatarRotation.z, avatarRotation.w)
LocalPlayer.Rotate(newRotation)
```

**Lua**
```lua
local Players = instance.GetHandler("Players")

local LocalPlayer = Players.LocalPlayer
local Avatar = LocalPlayer.Avatar // assuming this is not null

local avatarRoot = Avatar.GetPlayerRoot()
local avatarRotation = avatarRoot.Rotation
local newRotation = float4()
newRotation.x = avatarRotation.x
newRotation.y = avatarRotation.y + 45
newRotation.z = avatarRotation.z
newRotation.w = avatarRotation.w
LocalPlayer.Rotate(newRotation)
```