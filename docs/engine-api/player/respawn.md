# Respawn

:::info

+ This method is only available to LocalPlayers. Attempting to use this on a NetPlayer will fail.
+ This method will only work on **LocalAvatarScripts** if the World allows Respawning

:::

Respawns the avatar at one of the World's specified SpawnPoints.

The following example Respawns an avatar

**JavaScript and Lua**
```js
instance.GetHandler("Players").LocalPlayer.Respawn()
```