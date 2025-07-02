# NavMeshHit

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Result information for NavMesh queries.

## Properties

Property Name | Type | Description
--- | --- | ---
Position | [float3](./../float3/index.md) | Position of the hit
Normal | [float3](./../float3/index.md) | Normal at the point of the hit
Distance | `float` | Distance to the point of the hit
Mask | `int` | Mask specifying NavMesh area at the point of the hit
Hit | `bool` | Flag set when hit