# Renderer

The component which allows you to affect how a mesh may appear on the screen.

To get a Renderer from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let rendererComponent = item.GetComponent("Renderer")
```

You can then use the `rendererComponent` property to access the Dropdown class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
SetMaterialsFromAssets | `void` | `string`[] | Assigns shared materials from the Local Script Assets

## Properties

Property Name | Type | Description
--- | --- | ---
Mesh | [Mesh](./../../mesh/index.md) | Returns the shared mesh of the mesh filer