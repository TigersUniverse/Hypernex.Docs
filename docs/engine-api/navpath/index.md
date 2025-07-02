# NavPath

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

A path as calculated by the navigation system.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
ClearCorners | `void` | `none` | Erase all corner points from the path

## Properties

Property Name | Type | Description
--- | --- | ---
Corners | [float3](./../float3/index.md)[] | Corners of the path (Readonly)
Status | [NavMeshPathStatus](./../navmeshpathstatus/index.md) | Status of the path (Readonly)