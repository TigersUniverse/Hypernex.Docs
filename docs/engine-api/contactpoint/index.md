# ContactPoint

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Describes a contact point in which a collision occurs.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
point | [float3](../float3/index.md) | The point of contact (Read only)
normal | [float3](../float3/index.md) | Normal of the contact point (Read only)
impulse | [float3](../float3/index.md) | The impulse applied to this contact pair to resolve the collision (Read only)
thisCollider | [Collider](../collider/index.md) | The first collider in contact at the point (Read only)
otherCollider | [Collider](../collider/index.md) | The other collider in contact at the point (Read only)
separation | float | The distance between the colliders at the contact point