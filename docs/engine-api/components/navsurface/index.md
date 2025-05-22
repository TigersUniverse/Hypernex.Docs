# NavSurface

Used to build and enable a NavMesh surface for an agent type.

To get a NavSurface from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let navSurfaceComponent = item.GetComponent("NavSurface")
```

You can then use the `navSurfaceComponent` property to access the Dropdown class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
BuildMesh | `void` | `none` | Builds and instantiates this NavMesh surface

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component