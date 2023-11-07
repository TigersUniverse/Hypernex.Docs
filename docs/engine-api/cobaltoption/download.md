# Download

Downloads the option to be used with an Audio or Video

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
callback | SandboxFunc | The function to call back when done

The following example gets options from a given URL, then downloads the first one

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
    // Picking first option
    let cobaltOption = options.Options[0]
    cobaltOption.Download(new SandboxFunc(engine).SetAction(file => {
        if(file === null){
            print("Failed to download!")
            return
        }
        Audio.LoadFromCobalt(audio, file, new SandboxFunc(engine).SetAction(() => {
            Audio.SetPosition(audio, 0)
            Audio.Play(audio)
        }))
    }))
}))
```

**Lua**
```lua
local getMedia = GetMedia()
getMedia.url = "https://www.youtube.com/watch?v=ZdRontrcHRM"
getMedia.isAudioOnly = true
Cobalt.GetOptions(getMedia, SandboxFunc().SetAction(function(options)
    if options == null or #options.Options <= 0 then
        print("No options available!")
        return
    end
    print("Got options with "..tostring(#options.Options).." options!")
    -- Picking first option
    local cobaltOption = options.Options[1]
    cobaltOption.Download(SandboxFunc().SetAction(function(file)
        if file == nil then
            print("Failed to download!")
            return
        end
        Audio.LoadFromCobalt(audio, file, SandboxFunc().SetAction(function()
            Audio.SetPosition(audio, 0)
            Audio.Play(audio)
        end))
    end))
end))
```