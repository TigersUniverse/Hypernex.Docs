# Mesh

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Allows developers to create or modify meshes.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
Clear | `void` | `none` | Clears all the vertex data and all triangle indices
GetVertices | [float3](./../float3/index.md)[] | `none` | Gets the vertex positions of the Mesh
GetIndices | `int`[] | `none` | Fetches the index list for the specified sub-mesh
SetVertices | `void` | [float3](./../float3/index.md)[] | Assigns a new vertex positions array
SetNormals | `void` | [float3](./../float3/index.md)[] | Set the normals of the Mesh
SetTangents | `void` | [float4](./../float4/index.md)[] | Set the tangents of the Mesh
SetUVs | `void` | [float2](./../float2/index.md)[] | Sets the texture coordinates (UVs) stored in a given channel
SetIndices | `void` | `int`[], `int` | Sets the index buffer for the sub-mesh
SetSubMesh | `void` | `int`, `int`, `int` | Sets the information about a sub-mesh of the Mesh
RecalculateNormals | `void` | `none` | Recalculates the normals of the Mesh from the triangles and vertices

## Properties

Property Name | Type | Description
--- | --- | ---
IsReadable | `bool` | Returns if the mesh has read/write enabled
SubMeshCount | `int` | The number of sub-meshes inside the Mesh object