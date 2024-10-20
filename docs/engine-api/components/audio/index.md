# Audio

Provides functions for interfacing with AudioSources.

To get an AudioSource from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let audioComponent = item.GetComponent("Audio")
```

You can then use the `audioComponent` property to access the Audio class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
IsPlaying | `bool` | `none` | Returns true if the attached AudioSource is playing
IsMuted | `bool` | `none` | Returns true if the attached AudioSource is muted
IsLooping | `bool` | `none` | Returns true if the attached AudioSource is looping
Play | `void` | `none` | Plays the AudioSource
Pause | `void` | `none` | Pauses the AudioSource
Resume | `void` | `none` | Resumes the AudioSource
Stop | `void` | `none` | Stops the AudioSource
SetAudioClip | `void` | `string` | Sets the AudioSource's clip from Local Script Assets (AudioClip)
SetMute | `void` | `bool` | Sets the mute property of an AudioSource
SetLoop | `void` | `bool` | Sets the loop property of an AudioSource
GetPitch | `float` | `none` | Gets the pitch property of an AudioSource
SetPitch | `void` | `float` | Sets the pitch property of an AudioSource
GetVolume | `float` | `none` | Gets the volume property of an AudioSource
SetVolume | `void` | `float` | Sets the volume property of an AudioSource
GetPosition | `float` | `none` | Gets the position property of an AudioSource
SetPosition | `void` | `float` | Sets the position property of an AudioSource
GetLength | `float` | `none` | Gets the length property of an AudioSource's clip
LoadFromCobalt | `void` | [CobaltDownload](./../../cobaltdownload/index.md), `function()` | Loads data from a [CobaltDownload](./../../cobaltdownload/index.md) to an AudioSource