# Physics

A toolbox for anything Physics related.

To get the Physics class, you must [get its handler](./../index.md).

```js
let Physics = instance.GetHandler("Physics")
```

You can then use the `Physics` property to access the Physics class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
CheckBox | `bool` | [float3](./../../float3/index.md), [float3](./../../float3/index.md), [float4](./../../float4/index.md)¹ | Check whether the given box overlaps with other colliders or not
CheckCapsule | `bool` | [float3](./../../float3/index.md), [float3](./../../float3/index.md), `float` | Checks if any colliders overlap a capsule-shaped volume in world space
CheckSphere | `bool` | [float3](./../../float3/index.md), `float` | Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates
ClosestPoint | [float3](./../../float3/index.md) | [float3](./../../float3/index.md), [Collider](./../../collider/index.md), [float3](./../../float3/index.md), [float4](./../../float4/index.md) | Returns a point on the given collider that is closest to the specified location
ComputePenetration | [PenetrationResult](./../../penetrationresult/index.md) | [Collider](./../../collider/index.md), [float3](./../../float3/index.md), [float4](./../../float4/index.md), [Collider](./../../collider/index.md), [float3](./../../float3/index.md). [float4](./../../float4/index.md) | Computes the minimal translation required to separate the given colliders apart at specified poses.
SetCollisionIgnore | `void` | [Collider](./../../collider/index.md), [Collider](./../../collider/index.md), `bool` | Sets ability to collide between two colliders
Linecast | `bool` | [float3](./../../float3/index.md), [float3](./../../float3/index.md) | Returns true if there is any collider intersecting the line between start and end
OverlapBox | [Collider](./../../collider/index.md)[] | [float3](./../../float3/index.md), [float3](./../../float3/index.md), [float4](./../../float4/index.md)¹ | Finds all colliders touching inside of the given box
OverlapCapsule | [Collider](./../../collider/index.md)[] | [float3](./../../float3/index.md), [float3](./../../float3/index.md), `float` | Checks the given capsule against the physics world and returns all overlapping colliders
OverlapSphere | [Collider](./../../collider/index.md)[] | [float3](./../../float3/index.md), `float` | Computes colliders touching or that are inside the sphere
Raycast | [RaycastHit](./../../raycasthit/index.md)[] | [Ray](./../../ray/index.md), `float`² | Casts a ray through the Scene and returns all hits
RaycastAll | [RaycastHit](./../../raycasthit/index.md)[] | [Ray](./../../ray/index.md), `float`² | Casts a ray through the Scene and returns all hits
SphereCast | [RaycastHit](./../../raycasthit/index.md)[] | [float3](./../../float3/index.md), `float`, [float3](./../../float3/index.md), `float`² | Casts a sphere along the direction and returns all hits
SphereCastAll | [RaycastHit](./../../raycasthit/index.md)[] | [float3](./../../float3/index.md), `float`, [float3](./../../float3/index.md), `float`² | Casts a sphere along the direction and returns all hits

## Properties

Property Name | Type | Description
--- | --- | ---
gravity | [float3](./../../float3/index.md) | The current gravity in a world

___

¹ Optional Parameter

² [MathF.Infinity](./../../mathf/index.md)