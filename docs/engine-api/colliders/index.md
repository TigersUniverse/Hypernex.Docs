# Colliders

:::info

+ This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

Provides events to be registered to collision and trigger events on an Item.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
OnTriggerEnter | void | Registers a SandboxFunc to when an [Item](../item/index.md)'s trigger is entered
OnTriggerStay | void | Registers a SandboxFunc to when an [Item](../item/index.md)'s trigger is entered and hasn't exited
OnTriggerExit | void | Registers a SandboxFunc to when an [Item](../item/index.md)'s trigger is exited
OnCollisionEnter | void | Registers a SandboxFunc to when an [Item](../item/index.md)'s collider is entered
OnCollisionStay | void | Registers a SandboxFunc to when an [Item](../item/index.md)'s collider is entered and hasn't exited
OnCollisionExit | void | Registers a SandboxFunc to when an [Item](../item/index.md)'s collider is exited