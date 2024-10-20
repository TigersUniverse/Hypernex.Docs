# World

The World static class allows LocalScripts to read/modify properties of the current World that is focused.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[GetItemInRoot](getiteminroot.md) | [Item](./../../item/index.md) | `string` | Gets an Item in the root of the world based on its name
SetSkyboxMaterial | `void` | `string` | Sets the material from a Local Script Assets
UpdateEnvironment | `void` | `none` | Schedules an update of the environment cubemap (see [DynamicGI.UpdateEnvironment](https://docs.unity3d.com/ScriptReference/DynamicGI.UpdateEnvironment.html))

## Properties

Property Name | Type | Description
--- | --- | ---
Properties | [WorldProperties](./../../worldproperties/index.md) | The Properties for a World (Read only)
Children | [Item](./../../item/index.md)[] | All the children items in the root of the World