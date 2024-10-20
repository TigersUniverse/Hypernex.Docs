# TextInput

:::info

+ This class is only available in a Local environment

:::

The TextInput class is a component which interacts with Unity TextFields on UI.

:::caution

The TextInput class is *only* compatible with TextMeshPro.

:::

To get a TextInput component from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let textinputComponent = item.GetComponent("TextInput")
```

You can then use the `textinputComponent` property to access the TextInput class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
RegisterInputFieldVR | `void` | `none` | Allows the TextInput to be interacted with in VR
GetText | `string` | `none` | Gets the current text
SetText | `void` | `string` | Sets the current text
GetPlaceholderText | `string` | `none` | Gets the current placeholder's text
SetPlaceholderText | `void` | `string` | Sets the current placeholder's text
RegisterTextChanged | `void` | `function(string)` | Registers an event for when the TextInput is changed
RemoveAllTextChanged | `void` | `none` | Removes all registered events for when a TextInput is changed
GetColorBlock | [ColorBlock](./../../colorblock/index.md)? | `none` | Gets the ColorBlock for the element
SetColorBlock | `void` | [ColorBlock](./../../colorblock/index.md) | Sets the ColorBlock for the element

## Properties

Property Name | Type | Description
--- | --- | ---
RichText | `bool` | Whether or not the TextInput component can use [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/StyledText.html)
PlaceholderRichText | `bool` | Whether or not the TextInput's placeholder can use [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/StyledText.html)