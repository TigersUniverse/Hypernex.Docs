# PhysicsBody

The PhysicsBody class interacts with any sort of Rigidbody attached to an Item.

To get a PhysicsBody from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let physicsBodyComponent = item.GetComponent("PhysicsBody")
```

You can then use the `physicsBodyComponent` property to access the PhysicsBody class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetIsKinematic | `bool` | `none` | Gets if the RigidBody is Kinematic
SetIsKinematic | `void` | `bool` | Sets the RigidBody's isKinematic
GetUseGravity | `bool` | `none` | Gets if the RigidBody is using gravity
SetUseGravity | `void` | `bool` | Sets the RigidBody's useGravity
GetVelocity | [float3](./../../float3/index.md) | `none` | Gets the velocity of the RigidBody
SetVelocity | `void` | [float3](./../../float3/index.md) | Sets the RigidBody's velocity
GetAngularVelocity | [float3](./../../float3/index.md) | `none` | Gets the angular velocity of the RigidBody
SetAngularVelocity | `void` | [float3](./../../float3/index.md) | Sets the RigidBody's angular velocity
ResetCenterOfMass | `void` | `none` | Resets the RigidBody's center of mass
GetWorldCenterOfMass | [float3](./../../float3/index.md) | `none` | Gets the RigidBody's world center of mass
GetCenterOfMass | [float3](./../../float3/) | `none` | Gets the RigidBody's center of mass
SetCenterOfMass | `void` | [float3](./../../float3/) | Sets the RigidBody's center of mass