# Animation

Provides interfacing with the [Animation](https://docs.unity3d.com/2023.2/Documentation/ScriptReference/Animation.html) component.

To get an Animation from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let animationComponent = item.GetComponent("Animation")
```

You can then use the `animationComponent` property to access the Dropdown class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
IsValid | `void` | `none` | Checks if the component is not null
Play | `void` | `string` | Plays an animation without blending
Stop | `void` | `string` | Stops all playing animations that were started with this Animation
GetState | [AnimState](./../../animstate/index.md) | `string` | Gets the current state of the Animation

## Properties

Property Name | Type | Description
--- | --- | ---
Enabled | `bool` | Checks the active state of the component