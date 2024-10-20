# SetAvatar

:::info

+ This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.
+ This method will only work on **LocalAvatarScripts** if the World does not lock avatar switching

:::

The SetAvatar method will set the Player's avatar to a specific Avatar Id.

:::note

If the AvatarId is invalid or the Avatar is inaccessible to the Player, then the Avatar will stay null until a Player selects a different avatar themselves, or their avatar is set to a different Id.

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
avatarId | `string` | The AvatarId to switch into

The Following example sets the Player's AvatarId to `avatar_3a98cae0-8eac-45cb-b680-d9f4556d77c3` when the `SwitchAvatar` button is clicked

**JavaScript**
```js
let World = instance.GetHandler("World")
let Players = instance.GetHandler("Players")

let switchAvatarButton = item.GetComponent("Button")
switchAvatarButton.RegisterClick(() => Players.LocalPlayer.SetAvatar("avatar_3a98cae0-8eac-45cb-b680-d9f4556d77c3"))
```

**Lua**
```lua
local World = instance.GetHandler("World")
local Players = instance.GetHandler("Players")

local switchAvatarButton = item.GetComponent("Button")
switchAvatarButton.RegisterClick(() => Players.LocalPlayer.SetAvatar("avatar_3a98cae0-8eac-45cb-b680-d9f4556d77c3"))
```