# Bindings

A set of events and data to register and get for information of bindings, such as keyboard, mice, controllers, etc.

To get the Bindings class, you must [get its handler](./../index.md).

```js
let Bindings = instance.GetHandler("Bindings")
```

You can then use the `Bindings` property to access the Bindings class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetAllPresentBindings | `string[]` | `none` | Gets all active binding ids
GetUp | `float` | `string` | Gets the Up part of a Vector for a binding id
GetDown | `float` | `string` | Gets the Down part of a Vector for a binding id
GetLeft | `float` | `string` | Gets the Left part of a Vector for a binding id
GetRight | `float` | `string` | Gets the Right part of a Vector for a binding id
GetButton | `bool` | `string` | Gets if Button is currently being pressed or not for a binding id
GetButton2 | `bool` | `string` | Gets if Button2 is currently being pressed or not for a binding id
GetTrigger | `float` | `string` | Gets the amount of pressure that is being pressed against the Trigger for a binding id
GetGrab | `bool` | `string` | Gets if the Grab binding is active or not for a binding id
RegisterButtonClick | `void` | `string`, `function(bool)` | Registers a SandboxFunc to a specific binding on Button click
RegisterButton2Click | `void` | `string`, `function(bool)` | Registers a SandboxFunc to a specific binding on Button2 click
RegisterTriggerClick | `void` | `string`, `function(float)` | Registers a SandboxFunc to a specific binding on Trigger click
RegisterKeyboardClick | `void` | `string`, `function()` | Registers a SandboxFunc to a specific [KeyCode](https://docs.unity3d.com/ScriptReference/KeyCode.html) on click
RegisterMouseClick | `void` | `int`, `function()` | Registers a SandboxFunc to a specific [mouseId](https://docs.unity3d.com/ScriptReference/Input.GetMouseButtonDown.html) on mouse click