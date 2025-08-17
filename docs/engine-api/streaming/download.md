# Download

:::info

+ This method is only available on **LocalScripts**

:::

Downloads media from a Server's [VideoRequest](./../videorequest/index.md).

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
url | `string` | The URL to pull media from. This should be a valid URI
onDone | `function(`[StreamDownload](./../streamdownload/index.md)`)` | A callback for when the media information is pulled and downloaded (if needed)
options | [StreamDownloadOptions](./../streamdownloadoptions/index.md) | *(Optional)* Provides options for downloading media

The example below downloads media and sets a VideoPlayer to that media

**JavaScript**
```js
let Events = instance.GetHandler("Events")
let VideoPlayer = item.GetComponent("Video")

const url = "https://www.youtube.com/watch?v=hmQ9YrZ6Whc"

Events.Subscribe(ScriptEvent.OnServerNetworkEvent, (eventName, eventArgs) => {
    if(eventName !== "getVideo") return
    let req = eventArgs[0]
    print("Downloading video from " + req.GetDownloadUrl())
    Streaming.Download(req, downloadResult => {
        if(downloadResult === undefined || downloadResult === null){
            print("Could not find a video for URL!")
            return
        }
        VideoPlayer.LoadFromStream(downloadResult)
    })
})
```

**Lua**
```lua
local Events = instance.GetHandler("Events")
local VideoPlayer = item.GetComponent("Video")

local url = "https://www.youtube.com/watch?v=hmQ9YrZ6Whc"

Events.Subscribe(ScriptEvent.OnServerNetworkEvent, function(eventName, eventArgs)
    if eventName == "getVideo" then
        local req = eventArgs[1]
        print("Downloading video from "..tostring(req.GetDownloadUrl()))
        Streaming.Download(req, function(downloadResult)
            if downloadResult == nil then
                print("Could not find a video for URL!")
            else
                VideoPlayer.LoadFromStream(downloadResult)
            end
        end)
    end
end)
```