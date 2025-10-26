# GetWithOptions

:::info

+ This method is only available on **ServerScripts**

:::

Gets a [VideoRequest](./../videorequest/index.md) from a specified URL.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
url | `string` | The URL to pull media from. This should be a valid URI
onDone | `function(`[VideoRequest](./../videorequest/index.md)`)` | A callback for when the media information is pulled
options | [StreamDownloadOptions](./../streamdownloadoptions/index.md) | *(Optional)* Provides options for downloading media

:::note

Use the `Get(string, function(VideoRequest))` overload for using default options

:::

The example below downloads media and sets a VideoPlayer to that media


**JavaScript**

```js
let Events = instance.GetHandler("Events")
let Network = instance.GetHandler("Network")

Events.Subscribe(ScriptEvent.OnUserNetworkEvent, function(userid, eventName, eventArgs) {
    if (eventName == "getVideo") {
        Streaming.Get(eventArgs[1], function(videoRequest){
            // VideoRequests will return null/undefined if no media is found at the specified URL
            if (videoRequest === undefined || videoRequest === null) return
            Network.SendToAllClients("loadVideo", [videoRequest])
        }
    }
})
```

**Lua**

```lua
local Events = instance.GetHandler("Events")
local Network = instance.GetHandler("Network")

Events.Subscribe(ScriptEvent.OnUserNetworkEvent, function(userid, eventName, eventArgs)
    if eventName == "getVideo" then
        Streaming.Get(eventArgs[1], function(videoRequest)
            -- VideoRequests will return nil if no media is found at the specified URL
            if videoRequest == nil then return end
            Network.SendToAllClients("loadVideo", {videoRequest})
        end)
    end
end)
```