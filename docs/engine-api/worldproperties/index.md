# WorldProperties

:::info

+ This static class is only available on **LocalScripts** and **LocalAvatarScripts**

:::

The WorldProperties class allows LocalScripts to read/modify properties of the current World's restrictions, as visible in the World component, that is focused.


:::note

You must get the current WorldProperties from [World.Properties](./../handlers/world/index.md)

:::

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
AllowRespawn | bool | Allows a player to use the respawn button in their menu
Gravity | float | The y-axis value of gravity in a world
JumpHeight | float | The player's jump height
WalkSpeed | float | The player's walking speed
RunSpeed | float | The player's running speed
AllowRunning | bool | Allows a player to run
AllowScaling | bool | Allows a player to scale their character
LockAvatarSwitching | bool | Allows a player to switch their avatar