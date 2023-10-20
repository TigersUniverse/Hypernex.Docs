# Physics

:::info

+ This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

A toolset for anything Physics related.

**Static Properties**

Property Name | Property Type | Description
--- | --- | ---
gravity | [float3](../float3/index.md) | The current gravity in a world (Read only for LocalAvatarScripts)

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
CheckBox | bool | Check whether the given box overlaps with other colliders or not
CheckCapsule | bool | Checks if any colliders overlap a capsule-shaped volume in world space
CheckSphere | bool | Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates
ClosestPoint | [float3](../float3/index.md) | Returns a point on the given collider that is closest to the specified location
ComputePenetration | [PenetrationResult](../penetrationresult/index.md) | Computes the minimal translation required to separate the given colliders apart at specified poses.
SetCollisionIgnore | void | Sets ability to collide between two colliders
Linecast | bool | Returns true if there is any collider intersecting the line between start and end
OverlapBox | [Collider](../collider/index.md)[] | Finds all colliders touching inside of the given box
OverlapCapsule | [Collider](../collider/index.md)[] | Checks the given capsule against the physics world and returns all overlapping colliders
OverlapSphere | [Collider](../collider/index.md)[] | Computes colliders touching or that are inside the sphere
Raycast | [RaycastHit](../raycasthit/index.md)[] | Casts a ray through the Scene and returns all hits
RaycastAll | [RaycastHit](../raycasthit/index.md)[] | Casts a ray through the Scene and returns all hits
SphereCast | [RaycastHit](../raycasthit/index.md)[] | Casts a sphere along the direction and returns all hits
SphereCastAll | [RaycastHit](../raycasthit/index.md)[] | Casts a sphere along the direction and returns all hits