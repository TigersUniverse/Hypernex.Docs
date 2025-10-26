# VideoRequest

:::info

+ This class can only be created on **ServerScripts**
+ This class is available for **LocalScripts** and **ServerScripts**

:::

The VideoRequest object is the object used for a callback from [Streaming.GetWithOptions](./../streaming/getwithoptions.md). It contains all the data for a client to be able to download media, such as the format, DownloadURL, and more, listed below.

:::caution

All properties are **Read-only**! This is to prevent scripts from being able to override properties themselves.

:::

## Properties

Property Name | Property Type | Description
--- | --- | ---
MediaUrl | `string` | The requested URL to lookup
NeedsClientFetch | `bool` | If the client needs to fetch the DownloadURL itself
Options | [StreamDownloadOptions](./../streamdownloadoptions/index.md) | Options for the media fetch/download
DownloadUrl | `string` | The URL to Download the media from
IsStream | `bool` | If the requested media is a Stream

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
GetMediaUrl | `string` | `void` | Gets the MediaUrl Property
GetNeedsClientFetch | `bool` | `void` | Gets the NeedsClientFetch Property
GetOptions | [StreamDownloadOptions](./../streamdownloadoptions/index.md) | `void` | Gets the Options Property
GetDownloadUrl | `string` | `void` | Gets the DownloadUrl Property
IsStream | `bool` | `void` | Gets the IsStream Property