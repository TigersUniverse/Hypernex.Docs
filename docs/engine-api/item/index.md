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
[LocalPosition](localposition) | [float3](../float3) | Gets or Sets the localPosition of a Transform
[LocalRotation](localRotation) | [float4](../float4) | Gets or Sets the localRotation of a Transform
[Name](name) | string | Gets the name of the Transform
[Enabled](enabled) | bool | Gets or Sets the enabled status
Parent | Item | Gets or Sets the Item's parent
[ChildCount](childcount) | int | Gets the amount of children under a Transform
[Children](children) | Item[] | Gets all the children of an Item
CanCollide | bool | Gets or Sets the collision ability of a Collider attached to an Item

**Instance Methods**

Method Name | Return Type | Description
--- | --- | ---
[GetChildByIndex](getchildbyindex) | Item | Gets the child Item by index
[GetChildByName](getchildbyname) | Item | Gets the child Item by name