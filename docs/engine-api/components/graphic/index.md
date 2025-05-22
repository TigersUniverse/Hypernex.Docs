# Graphic

The Graphic class is a component which interacts with Unity Images on UI.

:::caution

The Graphic class is *only* compatible with [Image](https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/script-Image.html) and [RawImage](https://docs.unity3d.com/Packages/com.unity.ugui@3.0/manual/script-RawImage.html).

:::

To get a Graphic from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let graphicComponent = item.GetComponent("Graphic")
```

You can then use the `graphicComponent` property to access the Graphic class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
SetImageFromAsset | `void` | `string` | Sets the image's texture from the World's Resources
SetImageFromTexture | `void` | [Texture](./../../texture/index.md) | Sets the image from a Texture object

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component
RawEnabled | `bool` | Checks the active state of the RawImage component