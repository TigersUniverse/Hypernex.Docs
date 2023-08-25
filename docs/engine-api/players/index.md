# Players

:::info

+ This static class is only available on **LocalScripts** and **LocalAvatarScripts**

:::

Provides tools for getting information on other NetPlayers.

**Static Properties**

Property Name | Property Type | Description
--- | --- | ---
ActiveUserIds | string[] | Gets all the UserIds in the FocusedInstance

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
GetAvatarObject | [ReadonlyItem](../readonlyitem) | Gets an avatar item by [HumanBodyBones](../humanbodybones) from a userid
GetAvatarObjectByPath | [ReadonlyItem](../readonlyitem) | Gets an avatar item by path from a userid
IsAvatarItem | [ReadonlyItem](../readonlyitem) | Checks if an [Item](../item) or [ReadonlyItem](../readonlyitem) is a child of the NetPlayer's root
GetAllChildrenInAvatar | [ReadonlyItem](../readonlyitem)[] | Gets an array of all [ReadonlyItem](../readonlyitem)s in a NetPlayer's avatar
GetSelfAssignedTags | string[] | Gets a self assigned tag of a NetPlayer
GetExtraneousObject | object | Gets an object by key of a NetPlayer
GetParameterValue | object | Gets the value of a parameter by name of a NetPlayer
GetUsername | string | Gets a user's username
GetDisplayName | string | Gets a user's DisplayName
[GetPronouns](getpronouns) | [Pronouns](../pronouns) | Gets a user's pronouns