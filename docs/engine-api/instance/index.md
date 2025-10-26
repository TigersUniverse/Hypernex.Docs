# Instance

:::info

+ This class is only available on **LocalScripts** and **ServerScripts**

:::

Provides tools for getting information on other NetPlayers.

## Properties

Property Name | Property Type | Description
--- | --- | ---
UserIds (Server-only) | `string`[] | Gets all the UserIds in the FocusedInstance
InstanceCreatorId (Server-only) | `string` | Gets the Instance Creator's Id
HostId (Server-only) | `string` | Gets the current instance Host Id

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetHandler | `object` | `string` | Gets a [Handler](./../handlers/index.md) object