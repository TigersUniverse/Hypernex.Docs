# Interactables

:::info

+ This static class is only available on **LocalScripts**

:::

Provides tools for interacting with any object that can sync or is interactable.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
Respawn | void | Respawns an item that is networked synced.
IsNetworkSyncOwned | bool | Returns true if the NetworkSync attached to an Item is owned by someone
IsNetworkSyncOwnedLocally | bool | Returns true if the NetworkSync attached to an Item is owned by the LocalPlayer
GetNetworkSyncOwner | string | Returns the UserId of whoever currently owns the NetworkSync, or an Empty string if no one owns it
IsGrabbedLocally | bool | Returns true if the Grabbable attached to an Item is being Grabbed by the LocalPlayer