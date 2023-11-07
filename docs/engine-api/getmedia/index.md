# GetMedia

:::info

+ This class is only available on **LocalScripts**

:::

Represents the data for the video to get

**Properties**

Property Name | Property Type | Description
--- | --- | --- | ---
url | string | The URL of the Media to download
vCodec | [VideoCodec](./../videocodec/index.md) | (YouTube only) The video codec to use
vQuality | [VideoQuality](./../videoquality/index.md) | Quality of the video
aFormat | [AudioFormat](./../audioformat/index.md) | Audio format
isAudioOnly | bool | Should the video be removed
isNoTTWatermark | bool | Removes watermark in TikTok and Douyin videos
isTTFullAudio | bool | Downloads the original sound used in a TikTok video
isAudioMuted | bool | Mutes audio track(s) in videos
dubLang | string | Accept-Language header, if not empty, for YouTube video audio tracks