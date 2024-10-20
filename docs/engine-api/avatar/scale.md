# Scale

The Scale method will Scale your LocalPlayer's Avatar

:::note

+ **LocalScripts** may scale avatars at any time
+ **LocalAvatarScripts** may only scale avatars when the LocalPlayer owns the avatar and if the world allows scaling

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
scale | `float` | The unit of scale

The following example scales the Avatar to the AvatarParameter `avatarScale`

**JavaScript**
```js
let Players = instance.GetHandler("Players")
let Avatar = Players.LocalPlayer.Avatar
let ScaleParameter = Avatar.GetAvatarParameter("avatarScale")
Avatar.Scale(ScaleParameter.GetValue())
```

**Lua**
```lua
local Players = instance.GetHandler("Players")
local Avatar = Players.LocalPlayer.Avatar
local ScaleParameter = Avatar.GetAvatarParameter("avatarScale")
Avatar.Scale(ScaleParameter.GetValue())
```