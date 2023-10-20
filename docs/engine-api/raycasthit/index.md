# RaycastHit

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The structure used to get information back from a raycast.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
collider | [Collider](../collider/index.md) | The collider that the RayCast hit (Read only)
textureCoord | [float2](../float2/index.md) | The UV texture coordinate at the collision location (Read only)
textureCoord2 | [float2](../float2/index.md) | The secondary UV texture coordinate at the impact point (Read only)
item | [ReadonlyItem](../readonlyitem/index.md) | The item that was hit (Read only)
lightmapCoord | [float2](../float2/index.md) | The UV lightmap coordinate at the impact point (Read only)
point | [float3](../float3/index.md) | The impact point in world space where the ray hit the collider
normal | [float3](../float3/index.md) | The normal of the surface the ray hit
barycentricCoordinate | [float3](../float3/index.md) | The barycentric coordinate of the triangle we hit
distance | float | The distance from the ray's origin to the impact point