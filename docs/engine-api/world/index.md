# World

:::info

+ This static class is only available on **LocalScripts**

:::

The World static class allows LocalScripts to read/modify properties of the current World that is focused.

**Static Methods**

Name | Return Type | Description
--- | --- | ---
[GetItemInRoot](getiteminroot) | [Item](../item) | Gets an Item in the root of the world based on its name
SetSkyboxMaterial | void | Sets the material from a Local Script Assets
UpdateEnvironment | void | Schedules an update of the environment cubemap (see [DynamicGI.UpdateEnvironment](https://docs.unity3d.com/ScriptReference/DynamicGI.UpdateEnvironment.html))
DuplicateItem | Item | Creates a duplicate item in the World
UpdateWorldProperties | void | Updates the world's properties with a [WorldProperties](../worldproperties) object