# RemovePlayerAssignedTag

:::info

This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.

:::

Removes a Player Assigned Avatar.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
tag | `string` | The tag to remove

The following example removes the "died" tag

**JavaScript and Lua**
```js
instance.GetHandler("Players").LocalPlayer.RemovePlayerAssignedTag("died")
```