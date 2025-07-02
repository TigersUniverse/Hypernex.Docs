# NavAgent

Interfaces with a character's NavMeshAgent to allow a character to move throughout a NavMesh.

To get a NavAgent from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let navAgentComponent = item.GetComponent("NavAgent")
```

You can then use the `navAgentComponent` property to access the Dropdown class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
Warp | `bool` | [float3](./../../float3/index.md) | Warps agent to the provided position

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component
Speed | `float` | Maximum speed allowed when following a path
Destination | [float3](./../../float3/index.md) | Gets or attempts to set the destination of the agent in world-space units
IsPathPending | `bool` | Checks if a path is in the process of being computed (Readonly)
Path | [NavPath](../../navpath/index.md) | Gets or sets the current path