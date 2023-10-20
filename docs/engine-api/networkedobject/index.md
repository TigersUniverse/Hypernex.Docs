# NetworkedObject

A Data object for forwarding simple transform information to the server.

:::note

+ Properties for NetworkedObjects should be seen only as data stores; do not associate them with Transforms. Use [Item](../item/index.md)s for getting/setting Transform properties on the client.
+ This type can be networked

:::

**Instance Properties**

Property Name | Property Type | Default Value | Property Description
--- | --- | --- | ---
[ObjectLocation](objectlocation.md) | string | String.Empty | The location of an Object in a scene (For Hierarchy-based games only).
[IgnoreObjectLocation](ignoreobjectlocation.md) | bool | false | Whether or not to use ObjectLocation (This needs to be handled in the backend for non-hierarchy game engines).
[Position](position.md) | [float3](../float3/index.md) | `(0, 0, 0)` | The Position of the NetworkedObject
[Rotation](rotation.md) | [float4](../float4/index.md) | `(0, 0, 0, 0)` The Rotation of the NetworkedObject
[Size](size.md) | [float3](../float3/index.md) | `(0, 0, 0)` | The Size of the NetworkedObject