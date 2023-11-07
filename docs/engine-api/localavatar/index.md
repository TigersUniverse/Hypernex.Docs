# LocalAvatar

:::info

This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The LocalAvatar class provides developers with a way to get simple LocalAvatar data.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
IsLocalPlayerId | bool | Returns true if the UserId provided is the LocalPlayer's UserId
[GetAvatarObject](getavatarobject.md) | [Item](../item/index.md) or [ReadonlyItem](../readonlyitem/index.md) | Gets an Item from the Current Avatar based on the [HumanBodyBone](../humanbodybones/index.md)
[GetAvatarObjectByPath](getavatarobjectbypath.md) | [Item](../item/index.md) or [ReadonlyItem](../readonlyitem/index.md) | Gets an Item from the Current Avatar based on a path relative to the Avatar
[GetPlayerRoot](getplayerroot.md) | [ReadonlyItem](../readonlyitem/index.md) or [Item](../item/index.md) | Gets the Root Item of the Player
[IsAvatarItem](isavataritem.md) | bool | Checks if an Item is apart of the Player Root
[GetAvatarParameters](getavatarparameters.md) | [AvatarParameter](../avatarparameter/index.md)[] | Gets an array of all Avatar Parameters
[GetAvatarParameter](getavatarparameter.md) | [AvatarParameter](../avatarparameter/index.md) | Gets an Avatar Parameter by its name
[IsExtraneousObjectPresent](isextraneousobjectpresent.md) | bool | Checks if there is an Extraneous Object on a player by its key
[GetExtraneousObjectKeys](getextraneousobjectkeys.md) | string[] | Gets all the keys from the Extraneous Objects
[GetExtraneousObject](getextraneousobject.md) | object | Gets an Extraneous Object by its Key
[AddExtraneousObject](addextraneousobject.md) | void | Adds an extraneous object
[RemoveExtraneousObject](removeextraneousobject.md) | void | Removes an extraneous object by its key
[GetPlayerAssignedTags](getplayerassignedtags.md) | string[] | Gets all Player Assigned Tags
[AddPlayerAssignedTag](addplayerassignedtag.md) | void | Adds a tag
[RemovePlayerAssignedTag](removeplayerassignedtag.md) | void | Removes a tag
[Respawn](respawn.md) | void | Respawns a player
[TeleportTo](teleportto.md) | void | (**LocalScript** only) Teleports the Player to a specific position in World Space
[Rotate](rotate.md) | void | (**LocalScript** only) Rotates the Player to a specific rotation in World Space
Scale | void | Scales the avatar by a scale factor
[GetPronouns](getpronouns.md) | [Pronouns](../pronouns/index.md) | Gets a Player's Pronouns
SetAvatar | void | Sets the user's avatar
IsHost | bool | Gets whether or not the LocalAvatar is a host or not