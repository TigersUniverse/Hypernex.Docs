# Light

:::info

+ This class is only available in a Local environment

:::

The Light class is a component which interacts with Unity Lights.

To get a Light component from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let lightComponent = item.GetComponent("Light")
```

You can then use the `lightComponent` property to access the Light class.

## Properties

Property Name | Type | Description
--- | --- | ---
IsEnabled | `bool` | Checks if the Light component is Enabled
Type | [LightType](./../../lighttype/index.md) | Gets the type of light
Range | `float` | The range of each point of the light
Intensity | `float` | The intensity of a light
SpotAngle | `float` | (SpotLight) The angle of a spot light's cone in degrees
InnerSpotAngle | `float` | (SpotLight) The angle of a spot light's inner cone in degrees
Color | [Color](./../../color/index.md) | The light's color
UseColorTemperature | `bool` | Whether or not to use Color Temperature for the light
ColorTemperature | `float` | The color temperature of the light
LightShadows | [LightShadows](./../../lightshadows/index.md) | How the light casts shadows
ShadowStrength | float | The strength of the shadows