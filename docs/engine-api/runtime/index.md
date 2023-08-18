# Runtime

:::info

This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The Runtime class provides methods and properties to execute code at specified times and to get information on the current runtime.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
[OnUpdate](onupdate.md) | void | Invokes a SandboxFunc on [Update](https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html)
[RemoveOnUpdate](removeonupdate.md) | void | Removes a SandboxFunc that was marked to me OnUpdate
[OnLateUpdate](onlateupdate.md) | void | Invokes a SandboxFunc on [LateUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.LateUpdate.html)
[RemoveOnLateUpdate](removeonlateupdate.md) | void | Removes a SandboxFunc that was marked to me OnLateUpdate