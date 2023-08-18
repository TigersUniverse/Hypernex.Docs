# Item

:::info

This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Items are the universal object for Unity clients to allow interfacing between Transforms and User-Generated Code.

:::warning

+ This type CANNOT be networked! Attempting to serialize a Network Message will fail!
+ Items **CANNOT** be created by the client. Attempting to instantiate an Item will throw an Exception.

:::

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
[Position](position) | [float3](../float3) | Gets or Sets the position of a Transform
[Rotation](rotation) | [float4](../float4) | Gets or Sets the rotation of a Transform
[LocalSize](localsize) | [float3](../float3) | Gets or Sets the localScale of a Transform