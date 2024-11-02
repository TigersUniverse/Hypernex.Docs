# Video

Provides functions for interfacing with VideoPlayers attached to Items

To get a VideoPlayer from an item, use the [GetComponent](./../../item/getcomponent.md) method.

```js
let videoComponent = item.GetComponent("Video")
```

You can then use the `videoComponent` property to access the Video class.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
IsPlaying | `bool` | `none` | Returns true if the attached VideoPlayer is playing
IsMuted | `bool` | `none` | Returns true if the attached VideoPlayer is muted
IsLooping | `bool` | `none` | Returns true if the attached VideoPlayer is looping
Play | `void` | `none` | Plays the VideoPlayer
Pause | `void` | `none` | Pauses the VideoPlayer
Stop | `void` | `none` | Stops the VideoPlayer
SetVideoClip | `void` | `string` | Sets the VideoPlayer's clip from Local Script Assets (VideoClip)
SetMute | `void` | `bool` Sets the mute property of an VideoPlayer
SetLoop | `void` | `bool` | Sets the loop property of an VideoPlayer
GetPitch | `float` | `none` | Gets the pitch property of a VideoPlayer
SetPitch | `void` | `float` | Sets the pitch property of a VideoPlayer
GetVolume | `float` | `none` | Gets the volume property of a VideoPlayer
SetVolume | `void` | `float` | Sets the volume property of a VideoPlayer
GetPosition | `float` | `none` | Gets the position property of a VideoPlayer
SetPosition | `void` | `float` | Sets the position property of a VideoPlayer
GetLength | `float` | `none` | Gets the length property of a VideoPlayer
LoadFromStream | `void` | [StreamDownload](./../../streamdownload/index.md)  | Loads data from a [StreamDownload](./../../streamdownload/index.md) to a VideoPlayer