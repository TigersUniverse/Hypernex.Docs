# Audio

:::info

+ This static class is only available on **LocalScripts**

:::

Provides functions for interfacing with AudioSources attached to Items

**Static Methods**

Method Name | Return Type | Description
--- | --- | ---
IsValid | bool | Returns true if there is a valid AudioSource component
IsPlaying | bool | Returns true if the attached AudioSource is playing
IsMuted | bool | Returns true if the attached AudioSource is muted
IsLooping | bool | Returns true if the attached AudioSource is looping
Play | void | Plays the AudioSource
Pause | void | Pauses the AudioSource
Resume | void | Resumes the AudioSource
Stop | void | Stops the AudioSource
SetAudioClip | void | Sets the AudioSource's clip from Local Script Assets (AudioClip)
SetMute | void | Sets the mute property of an AudioSource
SetLoop | void | Sets the loop property of an AudioSource
GetPitch | float | Gets the pitch property of an AudioSource
SetPitch | void | Sets the pitch property of an AudioSource
GetVolume | float | Gets the volume property of an AudioSource
SetVolume | void | Sets the volume property of an AudioSource
GetPosition | float | Gets the position property of an AudioSource
SetPosition | void | Sets the position property of an AudioSource
GetLength | float | Gets the length property of an AudioSource's clip