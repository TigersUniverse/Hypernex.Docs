# AddPlayerAssignedTag

:::info

This method is only available on **LocalAvatarScripts**

:::

The AddPlayerAssignedTag method adds a simple tag to the LocalPlayer. THis can be used by other clients to quickly identify certain features about a client.

For example, avatars can identify each other for interactive reasons.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
tag | string | The tag to add

The following scripts add a predefined avatar name as a tag.

**JavaScript**
```js
const AVATAR_TAG_NAME = "InteractAvatar2"
Avatar.AddPlayerAssignedTag(AVATAR_TAG_NAME)
```

**Lua**
```lua
local avatarTagName = "InteractAvatar2"
Avatar.AddPlayerAssignedTag(avatarTagName)
```