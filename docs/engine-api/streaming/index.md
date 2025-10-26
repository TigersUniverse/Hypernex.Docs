# Streaming

:::info

+ This class has a mix of methods between **LocalScripts** and **ServerScripts**

:::

The Streaming class provides useful methods on download videos and streams from the web and applying them to Video and Audio players.

## Methods

Method Name | Return Type | Parameters | Description
--- | --- | --- | ---
[Download](./download.md) (Client-only) | `void` | [VideoRequest](./../videorequest/index.md), `function(`[StreamDownload](./../streamdownload/index.md)`)` | Loads a video/audio from a VideoRequest
[Get](./getwithoptions.md) (Server-only) | `void` | `string`, `function(`[VideoRequest](./../videorequest/index.md)`)` | Gets a video/audio's information
[GetWithOptions](./getwithoptions.md) (Server-only) | `void` | `string`, `function(`[VideoRequest](./../videorequest/index.md)`)`, [StreamDownloadOptions](./../streamdownloadoptions/index.md) | Gets a video/audio's information with specific options