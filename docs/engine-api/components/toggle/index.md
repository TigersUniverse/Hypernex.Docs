# Toggle

The Toggle class is a component which interacts with Unity Toggles on UI and 3D.

:::caution

The Toggle class is *only* compatible with TextMeshPro.

:::

To get a Toggle from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let toggleComponent = item.GetComponent("Toggle")
```

You can then use the `toggleComponent` property to access the Toggle class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetToggle | `bool` | `none` | Gets the current toggle value
SetToggle | `void` | `bool` | Sets the current toggle value
RegisterValueChanged | `void` | `function(bool)` | Registers an event for when the toggle value is changed
RemoveAllValuesChanged | `void` | `none` | Removes all events for when the toggle value is changed
GetColorBlock | [ColorBlock](./../../colorblock/index.md)? | `none` | Gets the ColorBlock for the element
SetColorBlock | `void` | [ColorBlock](./../../colorblock/index.md) | Sets the ColorBlock for the element

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component