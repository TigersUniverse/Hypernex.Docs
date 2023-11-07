# GetOptions

Gets a list of options for a given URL

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
getMedia | [GetMedia](./../getmedia/index.md) | The media to get
callback | SandboxFunc | The function to call back when done

The following example gets options from a given URL.

**JavaScript**
```js
let getMedia = new GetMedia()
getMedia.url = "https://www.youtube.com/watch?v=ZdRontrcHRM"
getMedia.isAudioOnly = true
Cobalt.GetOptions(getMedia, new SandboxFunc(engine).SetAction(options => {
    if(options === null || options.Options.length <= 0){
        print("No options available!")
        return
    }
    print("Got options with " + options.Options.length + " options!")
}))
```

**Lua**
```lua
local getMedia = GetMedia()
getMedia.url = "https://www.youtube.com/watch?v=ZdRontrcHRM"
getMedia.isAudioOnly = true
Cobalt.GetOptions(getMedia, SandboxFunc().SetAction(function(options)
    if options == nil or #options.Options <= 0 then
        print("No options available!")
        return
    end
    print("Got options with "..tostring(#options.Options).." options!")
end))
```