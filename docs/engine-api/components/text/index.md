# Text

:::info

+ This class is only available in a Local environment

:::

The Text class is a component which interacts with Unity Text on UI and 3D.

:::caution

The Text class is *only* compatible with TextMeshPro.

:::

To get a Text component from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let textComponent = item.GetComponent("Text")
```

You can then use the `textComponent` property to access the Text class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetText | `string` | `none` | Gets the current text
SetText | `void` | `string` | Sets the current text

## Properties

Property Name | Type | Description
--- | --- | ---
RichText | `bool` | Whether or not the Text component can use [RichText](https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/StyledText.html)