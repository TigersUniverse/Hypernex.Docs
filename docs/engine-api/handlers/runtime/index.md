# Runtime

The Runtime class provides methods and properties to execute code at specified times and to get information on the current runtime.

To get the Runtime class, you must [get its handler](./../index.md).

```js
let Runtime = instance.GetHandler("Runtime")
```

You can then use the `Runtime` property to access the Runtime class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[OnFixedUpdate](onfixedupdate.md) | `void` | `function()` | Invokes a SandboxFunc on [FixedUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.FixedUpdate.html)
[RemoveOnFixedUpdate](removeonfixedupdate.md) | `void` | `function()` | Removes a SandboxFunc that was marked to OnFixedUpdate
[OnUpdate](onupdate.md) | `void` | `function()` | Invokes a SandboxFunc on [Update](https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html)
[RemoveOnUpdate](removeonupdate.md) | `void` | `function()` | Removes a SandboxFunc that was marked to OnUpdate
[OnLateUpdate](onlateupdate.md) | `void` | `function()` | Invokes a SandboxFunc on [LateUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.LateUpdate.html)
[RemoveOnLateUpdate](removeonlateupdate.md) | `void` | `function()` | Removes a SandboxFunc that was marked to OnLateUpdate
OnDispose | `void` | `function()` | Invokes a SandboxFunc when the script is being Disposed
RemoveOnDispose | `void` | `function()` | Removes a SandboxFunc that was marked to OnDispose
RepeatSeconds | `void` | `function()`, `float` | Repeats a SandboxFunc for a desired amount of seconds
RemoveRepeatSeconds | `void` | `function()` | Removes an Existing SandboxFunc associated with a repeat
RunAfterSeconds | `void` | `function()`, `float` | Invokes a SandboxFunc after a desired amount of seconds