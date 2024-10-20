# Interactables

Provides tools for interacting with any object that can sync or is interactable.

To get an Interactable from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let interactableComponent = item.GetComponent("Interactable")
```

You can then use the `interactableComponent` property to access the Interactables class.

:::tip

This component is special! Unlike other components, where they will throw exceptions when the target Component does not exist, this one doesn't! This is because this component supports *multiple* classes:

+ NetworkSync
+ Respawnable
+ Grabbable

When you invoke functions that interact with these classes, and the component does not exist, it will simply not run the function, no exceptions!

:::

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
Respawn | `void` | `none` | Respawns an item that is networked synced.
IsNetworkSyncOwned | `bool` | `none` | Returns true if the NetworkSync attached to an Item is owned by someone
IsNetworkSyncOwnedLocally | `bool` | `none` | Returns true if the NetworkSync attached to an Item is owned by the LocalPlayer
GetNetworkSyncOwner | `string` | `none` | Returns the UserId of whoever currently owns the NetworkSync, or an Empty string if no one owns it
IsGrabbedLocally | `bool` | `none` | Returns true if the Grabbable attached to an Item is being Grabbed by the LocalPlayer