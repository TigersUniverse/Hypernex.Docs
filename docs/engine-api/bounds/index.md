# Bounds

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Represents an axis aligned bounding box.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
center | [float3](../float3) | The center of the bounding box
size | [float3](../float3) | The total size of the box
extents | [float3](../float3) | The extents of the bounding box
min | [float3](../float3) | The minimal point of the box
max | [float3](../float3) | The maximal point of the box

**Instance Methods**

Method Name | Return Type | Description
--- | --- | ---
SetMinMax | void | Sets the bounds to the min and max value of the box
Encapsulate | void | Grows the bounds to include the point
Expand | void | Expand the bounds by increasing its size by amount along each side
Intersects | bool | Checks if another bounding box intersects with this bounding box
IntersectRay | bool | Checks if the ray intersects this bounding box
Contains | bool | Checks if the point is contained in the bounding box
SqrDistance | float | Gets the smallest squared distance between the point and this bounding box
ClosestPoint | [float3](../float3) | Gets the closest point on the bounding box