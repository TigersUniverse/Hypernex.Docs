# Bindings

:::info

+ This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

A set of events and data to register and get for information of bindings, such as keyboard, mice, controllers, etc.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
GetAllPresentBindings | string[] | Gets all active binding ids
GetUp | float | Gets the Up part of a Vector for a binding id
GetDown | float | Gets the Down part of a Vector for a binding id
GetLeft | float | Gets the Left part of a Vector for a binding id
GetRight | float | Gets the Right part of a Vector for a binding id
GetButton | bool | Gets if Button is currently being pressed or not for a binding id
GetButton2 | bool | Gets if Button2 is currently being pressed or not for a binding id
GetTrigger | float | Gets the amount of pressure that is being pressed against the Trigger for a binding id
GetGrab | bool | Gets if the Grab binding is active or not for a binding id
RegisterButtonClick | void | Registers a SandboxFunc to a specific binding on Button click
RegisterButton2Click | void | Registers a SandboxFunc to a specific binding on Button2 click
RegisterTriggerClick | void | Registers a SandboxFunc to a specific binding on Trigger click
RegisterKeyboardClick | void | Registers a SandboxFunc to a specific [KeyCode](https://docs.unity3d.com/ScriptReference/KeyCode.html) on click
RegisterMouseClick | void | Registers a SandboxFunc to a specific [mouseId](https://docs.unity3d.com/ScriptReference/Input.GetMouseButtonDown.html) on mouse click