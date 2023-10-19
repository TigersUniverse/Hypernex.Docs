# LocalAvatar

:::info

This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The LocalAvatar class provides developers with a way to get simple LocalAvatar data.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
IsLocalPlayerId | bool | Returns true if the UserId provided is the LocalPlayer's UserId
[GetAvatarObject](getavatarobject) | [Item](../item/) or [ReadonlyItem](../readonlyitem/) | Gets an Item from the Current Avatar based on the [HumanBodyBone](../humanbodybones)
[GetAvatarObjectByPath](getavatarobjectbypath) | [Item](../item/) or [ReadonlyItem](../readonlyitem/) | Gets an Item from the Current Avatar based on a path relative to the Avatar
[GetPlayerRoot](getplayerroot) | [ReadonlyItem](../readonlyitem/) or [Item](../item/) | Gets the Root Item of the Player
[IsAvatarItem](isavataritem) | bool | Checks if an Item is apart of the Player Root
[GetAvatarParameters](getavatarparameters) | [AvatarParameter](../avatarparameter)[] | Gets an array of all Avatar Parameters
[GetAvatarParameter](getavatarparameter) | [AvatarParameter](../avatarparameter) | Gets an Avatar Parameter by its name
[IsExtraneousObjectPresent](isextraneousobjectpresent) | bool | Checks if there is an Extraneous Object on a player by its key
[GetExtraneousObjectKeys](getextraneousobjectkeys) | string[] | Gets all the keys from the Extraneous Objects
[GetExtraneousObject](getextraneousobject) | object | Gets an Extraneous Object by its Key
[AddExtraneousObject](addextraneousobject) | void | Adds an extraneous object
[RemoveExtraneousObject](removeextraneousobject) | void | Removes an extraneous object by its key
[GetPlayerAssignedTags](getplayerassignedtags) | string[] | Gets all Player Assigned Tags
[AddPlayerAssignedTag](addplayerassignedtag) | void | Adds a tag
[RemovePlayerAssignedTag](removeplayerassignedtag) | void | Removes a tag
[Respawn](respawn) | void | Respawns a player
[TeleportTo](teleportto) | void | (**LocalScript** only) Teleports the Player to a specific position in World Space
[Rotate](rotate) | void | (**LocalScript** only) Rotates the Player to a specific rotation in World Space
Scale | void | Scales the avatar by a scale factor
[GetPronouns](getpronouns) | [Pronouns](../pronouns) | Gets a Player's Pronouns
SetAvatar | void | Sets the user's avatar