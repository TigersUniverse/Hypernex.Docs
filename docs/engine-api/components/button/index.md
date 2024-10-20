# Button

:::info

+ This class is only available in a Local environment

:::

The Button class is a component which interacts with Unity Buttons on UI and 3D.

:::caution

The Button class is *only* compatible with TextMeshPro.

:::

To get a button from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let buttonComponent = item.GetComponent("Button")
```

You can then use the `buttonComponent` property to access the Button class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
RegisterClick | `void` | `function()` | Registers a click event handler
RemoveAllClicks | `void` | `none` | Removes all click event handlers from the button
GetColorBlock | [ColorBlock](./../../colorblock/index.md)? | `none` | Gets the ColorBlock for the element
SetColorBlock | `void` | [ColorBlock](./../../colorblock/index.md) | Sets the ColorBlock for the element