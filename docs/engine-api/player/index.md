# Player

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The Player class is the representation of a Player connected to a GameInstance. It includes all NetPlayers of a GameInstance and even the LocalPlayer. The Player class of a player can even be accessed if you are not in an instance at all; however, it will restrict the access to only the LocalPlayer.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[IsExtraneousObjectPresent](./isextraneousobjectpresent.md) | `bool` | `string` | Returns a `true` if an extraneous object with the given key is present on the Player
[GetExtraneousObjectKeys](./getextraneousobjectkeys.md) | `string`[] | `none` | Returns all extraneous object keys
[GetExtraneousObject](./getextraneousobject.md) | `object` | `string` | Returns an extraneous object from its key
[AddExtraneousObject](./addextraneousobject.md) | `void` | `string`, `object` | Adds an extraneous object to the Player
[RemoveExtraneousObject](./removeextraneousobject.md) | `void` | `string` | Removes an extraneous object by key
[GetPlayerAssignedTags](./getplayerassignedtags.md) | `string`[] | `none` | Returns all Player assigned tags
[AddPlayerAssignedTag](./addplayerassignedtag.md) | `void` | `string` | Adds a tag to the Player
[RemovePlayerAssignedTag](./removeplayerassignedtag.md) | `void` | `string` | Removes a tag from the Player
[Respawn](./respawn.md) | `void` | `none` | Respawns the Player
[TeleportTo](./teleportto.md) | `void` | [float3](./../float3/index.md) | Teleports the Player to world position coordinates
[Rotate](./rotate.md) | `void` | [float4](./../float4/index.md) | Rotates the root of a Player
[SetAvatar](./setavatar.md) | `void` | `string` | Sets the avatar to a specific avatar id

## Properties

Property Name | Type | Description
--- | --- | ---
Avatar | [Avatar](./../avatar/index.md) | The Avatar associated with the Player
[Pronouns](./pronouns.md) | [Pronouns](./../pronouns/index.md) | The Player's pronouns
Username | `string` | The Player's username
DisplayName | `string` | The Player's DisplayName, or Username if empty
IsVR | `bool` | Whether or not the Player is currently in VR
IsHost | `bool` | Returns `true` if the Player is the Host of the GameInstance