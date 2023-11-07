# Runtime

:::info

This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The Runtime class provides methods and properties to execute code at specified times and to get information on the current runtime.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
[OnFixedUpdate](onfixedupdate.md) | void | Invokes a SandboxFunc on [FixedUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.FixedUpdate.html)
[RemoveOnFixedUpdate](removeonfixedupdate.md) | void | Removes a SandboxFunc that was marked to OnFixedUpdate
[OnUpdate](onupdate.md) | void | Invokes a SandboxFunc on [Update](https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html)
[RemoveOnUpdate](removeonupdate.md) | void | Removes a SandboxFunc that was marked to OnUpdate
[OnLateUpdate](onlateupdate.md) | void | Invokes a SandboxFunc on [LateUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.LateUpdate.html)
[RemoveOnLateUpdate](removeonlateupdate.md) | void | Removes a SandboxFunc that was marked to OnLateUpdate
RepeatSeconds | void | Repeats a SandboxFunc for a desired about of seconds
RemoveRepeatSeconds | void | Removes an Existing SanboxFunc associated with a repeat
RunAfterSeconds | void | Invokes a SandboxFunc after a desired amount of seconds