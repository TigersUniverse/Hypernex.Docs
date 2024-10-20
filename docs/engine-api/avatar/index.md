# Avatar

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The Avatar class provides information on a [Player's](./../player/index.md) current Avatar. It can provide information on the child Items, parameters, etc.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[GetAvatarObject](./getavatarobject.md) | [Item](./../item/index.md) | [HumanBodyBones](./../humanbodybones/index.md) | Returns the Item of a specific Avatar bone
[GetAvatarObjectByPath](./getavatarobjectbypath.md) | [Item](./../item/index.md) | `string` | Returns a descendant of the Avatar by path
[GetPlayerRoot](./getplayerroot.md) | [Item](./../item/index.md) | `none` | Returns the Player's Root
[IsAvatarItem](./isavataritem.md) | `bool` | [Item](./../item/index.md) | Returns `true` if the Item is a descendant of the Avatar
[GetAvatarParameters](./getavatarparameters.md) | [AvatarParameter](./../avatarparameter/index.md)[] | `none` | Returns all Parameters on an Avatar
[GetAvatarParameter](./getavatarparameter.md) | [AvatarParameter](./../avatarparameter/index.md) | `string` | Gets an Avatar's parameter by name
[Scale](./scale.md) | `void` | `float` | Scales an Avatar

## Properties

Property Name | Type | Description
--- | --- | ---
IsLocalAvatar | `bool` | Returns `true` if the current Avatar is owned by the LocalPlayer
OwnerId | `string` | Returns the PlayerId of the Avatar's owner