# NetworkedObject

A Data object for forwarding simple transform information to the server.

:::note

+ Properties for NetworkedObjects should be seen only as data stores; do not associate them with Transforms. Use [Item](../item)s for getting/setting Transform properties on the client.
+ This type can be networked

:::

**Instance Properties**

Property Name | Property Type | Default Value | Property Description
--- | --- | --- | ---
[ObjectLocation](objectlocation) | string | String.Empty | The location of an Object in a scene (For Hierarchy-based games only).
[IgnoreObjectLocation](ignoreobjectlocation) | bool | false | Whether or not to use ObjectLocation (This needs to be handled in the backend for non-hierarchy game engines).
[Position](position) | [float3](../float3/) | `(0, 0, 0)` | The Position of the NetworkedObject
[Rotation](rotation) | [float4](../float4/) | `(0, 0, 0, 0)` The Rotation of the NetworkedObject
[Size](size) | [float3](../float3/) | `(0, 0, 0)` | The Size of the NetworkedObject