# AddPlayerAssignedTag

:::info

This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.

:::

The AddPlayerAssignedTag method adds a simple tag to the LocalPlayer. THis can be used by other clients to quickly identify certain features about a client.

For example, avatars can identify each other for interactive reasons.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
tag | `string` | The tag to add

The following scripts add a predefined avatar name as a tag.

**JavaScript**
```js
const AVATAR_TAG_NAME = "InteractAvatar2"
let Players = instance.GetHandler("Players")
Players.LocalPlayer.AddPlayerAssignedTag(AVATAR_TAG_NAME)
```

**Lua**
```lua
local avatarTagName = "InteractAvatar2"
local Players = instance.GetHandler("Players")
Players.LocalPlayer.AddPlayerAssignedTag(avatarTagName)
```