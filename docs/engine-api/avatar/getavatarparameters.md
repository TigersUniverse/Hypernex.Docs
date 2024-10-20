# GetAvatarParameters

The GetAvatarParameters function returns all the [AvatarParameter](./../avatarparameter/index.md)s present on an Avatar.

:::caution

`Trigger` parameter types are not supported and will throw an Exception if one is present.

:::

The following example sets all bool parameters to false.

**JavaScript**
```js
let parameters = instance.GetHandler("Player").LocalPlayer.GetAvatarParameters()
for(let i = 0; i < parameters.length; i++){
    let parameter = parameters[i]
    if(parameter.Type === AvatarParameterType.Bool){
        parameter.SetValue(false)
    }
}
```

**Lua**
```lua
local parameters = instance.GetHandler("Player").LocalPlayer.GetAvatarParameters()
for _, parameter in ipairs(parameters) do
    if parameter.Type == AvatarParameterType.Bool then
        parameter.SetValue(false)
    end
end
```