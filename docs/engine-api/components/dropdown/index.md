# Dropdown

The Dropdown class is a component which interacts with Unity Dropdowns on UI and 3D.

:::caution

The Dropdown class is *only* compatible with TextMeshPro.

:::

To get a Dropdown from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let dropdownComponent = item.GetComponent("Dropdown")
```

You can then use the `dropdownComponent` property to access the Dropdown class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetValue | `int` | `none` | Gets the current index of the selected value
SetValue | `void` | `int` | Sets the current index
RegisterValueChanged | `void` | `function(int)` | Registers an event for when the selected index is changed
RemoveAllValuesChanged | `void` | `none` | Removes all events for when the selected index is changed
GetColorBlock | [ColorBlock](./../../colorblock/index.md)? | `none` | Gets the ColorBlock for the element
SetColorBlock | `void` | [ColorBlock](./../../colorblock/index.md) | Sets the ColorBlock for the element

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component