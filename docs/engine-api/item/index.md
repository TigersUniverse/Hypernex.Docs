# Item

:::info

This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Items are the universal object for Unity clients to allow interfacing between Transforms and User-Generated Code.

:::warning

+ This type CANNOT be networked! Attempting to serialize a Network Message will fail!
+ Items **CANNOT** be created by the client. Attempting to instantiate an Item will throw an Exception.

:::

## Properties

Property Name | Type | Description
--- | --- | ---
IsReadOnly | `bool` | Returns `true` if the Item can only be read
[Position](position.md) | [float3](../float3/index.md) | Gets or Sets the position of a Transform
[Rotation](rotation.md) | [float4](../float4/index.md) | Gets or Sets the rotation of a Transform
[LocalSize](localsize.md) | [float3](../float3/index.md) | Gets or Sets the localScale of a Transform
[LocalPosition](localposition.md) | [float3](../float3/index.md) | Gets or Sets the localPosition of a Transform
[LocalRotation](localRotation.md) | [float4](../float4/index.md) | Gets or Sets the localRotation of a Transform
[Name](name.md) | string | Gets the name of the Transform
[Enabled](enabled.md) | bool | Gets or Sets the enabled status
Parent | Item | Gets or Sets the Item's parent
[ChildCount](childcount.md) | int | Gets the amount of children under a Transform
[Children](children.md) | Item[] | Gets all the children of an Item
CanCollide | bool | Gets or Sets the collision ability of a Collider attached to an Item
Collider | [Collider](./../collider/index.md) | Gets the Collider attached to an Item
Colliders | [Collider](./../collider/index.md)[] | Gets all Colliders attached to an Item
Path | string | Gets the Item's path in the hierarchy (Readonly)

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[GetChildByIndex](getchildbyindex.md) | `Item` | `int` | Gets the child Item by index
[GetChildByName](getchildbyname.md) | `Item` | `string` | Gets the child Item by name
Duplicate | Item | `string`¹ | Creates a duplicate of the Item with an optional name
[GetComponent](./getcomponent.md) | `object` | `string` | Returns an Attached Component

___

¹ Optional parameter