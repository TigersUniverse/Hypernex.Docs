# Runtime

:::info

This static class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

The Runtime class provides methods and properties to execute code at specified times and to get information on the current runtime.

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
[OnFixedUpdate](onfixedupdate) | void | Invokes a SandboxFunc on [FixedUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.FixedUpdate.html)
[RemoveOnFixedUpdate](removeonfixedupdate) | void | Removes a SandboxFunc that was marked to OnFixedUpdate
[OnUpdate](onupdate) | void | Invokes a SandboxFunc on [Update](https://docs.unity3d.com/ScriptReference/MonoBehaviour.Update.html)
[RemoveOnUpdate](removeonupdate) | void | Removes a SandboxFunc that was marked to OnUpdate
[OnLateUpdate](onlateupdate) | void | Invokes a SandboxFunc on [LateUpdate](https://docs.unity3d.com/ScriptReference/MonoBehaviour.LateUpdate.html)
[RemoveOnLateUpdate](removeonlateupdate) | void | Removes a SandboxFunc that was marked to OnLateUpdate