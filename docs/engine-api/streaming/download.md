# Download

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
url | `string` | The URL to pull media from. This should be a valid URI
onDone | `function(`[StreamDownload](./../streamdownload/index.md)`)` | A callback for when the media information is pulled and downloaded (if needed)
options | [StreamDownloadOptions](./../streamdownloadoptions/index.md) | *(Optional)* Provides options for downloading media

The example below downloads media and sets a VideoPlayer to that media

**JavaScript**
```js
const url = "https://www.youtube.com/watch?v=ZdRontrcHRM"

let World = instance.GetHandler("World")
let videoPlayer = World.GetItemInRoot("VideoPlayer").GetComponent("Video")
print("Downloading video at " + url)
Streaming.Download(url, downloadResult => {
    if(downloadResult === undefined){
        print("Could not download! Is this a valid/supported URL?")
        return
    }
    videoPlayer.LoadFromStream(downloadResult)
    videoPlayer.Play()
})
```

**Lua**
```lua
local url = "https://www.youtube.com/watch?v=ZdRontrcHRM"

local World = instance.GetHandler("World")
local videoPlayer = World.GetItemInRoot("VideoPlayer").GetComponent("Video")
print("Downloading video at "..url)
Streaming.Download(url, function(downloadResult)
    if downloadResult == nil then
        print("Could not download! Is this a valid/supported URL?")
    else
        videoPlayer.LoadFromStream(downloadResult)
        videoPlayer.Play()
    end
end)
```