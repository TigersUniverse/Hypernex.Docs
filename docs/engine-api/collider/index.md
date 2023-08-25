# Collider

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Respresents collider data.

**Instance Properties**

Property Name | Property Type | Description
--- | --- | ---
item | [ReadonlyItem](../readonlyitem) | The item attached to the collision (Read only)
isTrigger | bool | Specifies if the collider is configured as a trigger
contactOffset | float | Contact offset value of the collider
bounds | [Bounds](../bounds) | The world space bounding volume of the collider (Read only)
hasModifiableContacts | bool | Specify whether the collider's contacts are modifiable or not
providesContacts | bool | Whether or not the collider generates contacts for Physics.ContactEvent
layerOverridePriority | int | A decision priority assigned to the Collider used when there is a conflicting decision on whether a Collider can contact another Collider

**Instance Methods**

Method Name | Return Type | Description
--- | --- | ---
ClosestPoint | [float3](../float3) | Returns a point on the collider that is closest to a given location
ClosestPointOnBounds | [float3](../float3) | The closest point to the bounding box of the attached collider
Raycast | [RaycastHit](../raycasthit) | Raycasts a ray with a max distance and returns the result