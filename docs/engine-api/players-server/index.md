# Players (Server)

:::info

+ This static class is only available on **ServerScripts**

:::

Provides tools for getting information on other NetPlayers.

**Static Properties**

Property Name | Property Type | Description
--- | --- | ---
UserIds | string[] | Gets all the UserIds in the FocusedInstance
InstanceCreatorId | string | Gets the Instance Creator's Id
HostId | string | Gets the current instance Host Id

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
GetNetPlayerUpdate | NetPlayer | Gets the PlayerUpdate for a NetPlayer