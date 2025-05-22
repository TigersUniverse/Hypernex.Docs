# NavMesh

Used to access the World's baked NavMesh.

To get the NavMesh class, you must [get its handler](./../index.md).

```js
let NavMesh = instance.GetHandler("NavMesh")
```

You can then use the `NavMesh` property to access the NavMesh class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
Raycast | [NavMeshHit](./../../navmeshhit/index.md)? | [float3](./../../float3/index.md), [float3](./../../float3/index.md), `int` | Trace a line between two points on the NavMesh
CalculatePath | `bool` | [float3](./../../float3/index.md), [float3](./../../float3/index.md), `int`, [NavPath](./../../navpath/index.md) | Calculates a path between two points in a referenced NavPath, then returns if a complete or partial path was found
FindClosestEdge | [NavMeshHit](./../../navmeshhit/index.md)? | [float3](./../../float3/index.md), `int` | Locates the closest NavMesh edge from a point on the NavMesh
SamplePosition | [NavMeshHit](./../../navmeshhit/index.md)? | [float3](./../../float3/index.md), `float`, `int` | Finds the nearest point based on the NavMesh within a specified range

## Properties

Property Name | Type | Description
--- | --- | ---
AllAreas | `int` | Area mask constant that includes all NavMesh areas