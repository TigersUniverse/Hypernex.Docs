# Slider

:::info

+ This class is only available in a Local environment

:::

The Slider class is a component which interacts with Unity Sliders on UI.

:::caution

The Slider class is *only* compatible with TextMeshPro.

:::

To get a Slider from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let sliderComponent = item.GetComponent("Slider")
```

You can then use the `sliderComponent` property to access the Slider class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetValue | `float` | `none` | Gets the current slider value
SetValue | `void` | `float` | Sets the current slider value
RegisterValueChanged | `void` | `function(float)` | Registers an event for when the slider value is changed
RemoveAllValuesChanged | `void` | `none` | Removes all events for when the slider value is changed
GetMinimum | `float` | `none` | Gets the current minimum value for the slider
GetMaximum | `float` | `none` | Gets the current maximum value for the slider
SetRange | `void` | `float`, `float` | Sets the minimum and then maximum range for the slider
GetColorBlock | [ColorBlock](./../../colorblock/index.md)? | `none` | Gets the ColorBlock for the element
SetColorBlock | `void` | [ColorBlock](./../../colorblock/index.md) | Sets the ColorBlock for the element