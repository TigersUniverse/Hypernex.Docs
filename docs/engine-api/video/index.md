# Video

:::info

+ This static class is only available on **LocalScripts**

:::

Provides functions for interfacing with VideoPlayers attached to Items

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
IsValid | bool | Returns true if there is a valid VideoPlayer component
IsPlaying | bool | Returns true if the attached VideoPlayer is playing
IsMuted | bool | Returns true if the attached VideoPlayer is muted
IsLooping | bool | Returns true if the attached VideoPlayer is looping
Play | void | Plays the VideoPlayer
Pause | void | Pauses the VideoPlayer
Stop | void | Stops the VideoPlayer
SetVideoClip | void | Sets the VideoPlayer's clip from Local Script Assets (VideoClip)
SetMute | void | Sets the mute property of an VideoPlayer
SetLoop | void | Sets the loop property of an VideoPlayer
GetPitch | float | Gets the pitch property of a VideoPlayer
SetPitch | void | Sets the pitch property of a VideoPlayer
GetVolume | float | Gets the volume property of a VideoPlayer
SetVolume | void | Sets the volume property of a VideoPlayer
GetPosition | float | Gets the position property of a VideoPlayer
SetPosition | void | Sets the position property of a VideoPlayer
GetLength | float | Gets the length property of a VideoPlayer
LoadFromCobalt | void | Loads data from a [CobaltDownload](./../cobaltdownload/index.md) to a VideoPlayer