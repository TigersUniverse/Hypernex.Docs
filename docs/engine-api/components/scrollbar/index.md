# Scrollbar

The Scrollbar class is a component which interacts with Unity Scrollbars on UI.

:::caution

The Scrollbar class is *only* compatible with TextMeshPro.

:::

To get a Scrollbar from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let scrollbarComponent = item.GetComponent("Scrollbar")
```

You can then use the `scrollbarComponent` property to access the Scrollbar class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetValue | `float` | `none` | Gets the current scroll value
SetValue | `void` | `float` | Sets the current scroll value
RegisterValueChanged | `void` | `function(float)` | Registers an event for when the scroll value is changed
RemoveAllValuesChanged | `void` | `none` | Removes all events for when the scroll value is changed
GetColorBlock | [ColorBlock](./../../colorblock/index.md)? | `none` | Gets the ColorBlock for the element
SetColorBlock | `void` | [ColorBlock](./../../colorblock/index.md) | Sets the ColorBlock for the element

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component