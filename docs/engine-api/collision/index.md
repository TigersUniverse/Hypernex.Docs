# Collision

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Describes a collision.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
impulse | [float3](../float3) | The total impulse applied to this contact pair to resolve the collision (Read only)
relativeVelocity | [float3](../float3) | The relative linear velocity of the two colliding objects (Read only)
collider | [Collider](../collider) | The collider that was hit (Read only)
item | [ReadonlyItem](../readonlyitem) | The item of the object that was hit (Read only)
contacts | [ContactPoint](../contactpoint)[] | Gets all the contact points for the collision (Read only)