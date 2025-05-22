# Texture

:::info

+ This class is only available on **LocalAvatarScripts** and **LocalScripts**

:::

A class which allows developers to create textures at runtime.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
Resize | `void` | `int`, `int` | Resizes the Texture
SetPixelsRaw | `void` | `byte`[] | Sets the raw data of an entire mipmap level directly in CPU memory
SetPixel | `void` | `int`, `int`, [Color](./../color/index.md) | Sets the pixel color at coordinates (x,y)
Apply | `void` | `none` | Copies changes you've made in a CPU texture to the GPU

## Properties

Property Name | Type | Description
--- | --- | ---
IsReadable | `bool` | Whether Unity stores an additional copy of this texture's pixel data in CPU-addressable memory (Readonly)
Width | `int` | The width of the texture in pixels (Readonly)
Height | `int` | The height of the texture in pixels (Readonly)
PointFilter | `bool` | Whether to use Point filtering or Bilinear filtering