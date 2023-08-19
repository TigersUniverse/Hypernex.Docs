# GetAvatarParameter

The GetAvatarParameter function returns an [AvatarParameter](../avatarparameter). You should know what type the Parameter is when getting it to be able to properly handle it.

:::caution

`Trigger` parameter types are not supported and will throw an Exception when trying to get one.

:::

**Parameters**

 Parameter Name | Parameter Type | Parameter Description
 --- | --- | ---
 parameterName | string | The name of the parameter to get the value of

 The following example gets a parameter (assuming it's a float) and sizes an Item in the avatar.

 **JavaScript**
 ```js
let item = LocalAvatar.GetAvatarObjectByPath("Hips/Spine/Neck/Head/Pet")
Runtime.OnUpdate(new SandboxFunc(engine).SetAction(() => {
    let parameterValue = LocalAvatar.GetAvatarParameter("petScale").GetValue()
    // Assuming the pet is uniform scale
    let sizeValue = parameterValue / 5
    item.LocalSize = new float3(sizeValue, sizeValue, sizeValue)
}))
 ```

 **Lua**
 ```lua
local item = LocalAvatar.GetAvatarObjectByPath("Hips/Spine/Neck/Head/Pet")
Runtime.OnUpdate(SandboxFunc().SetAction(function ()
    local parameterValue = tonumber(LocalAvatar.GetAvatarParameter("petScale").GetValue())
    // Assuming the pet is uniform scale
    local sizeValue = parameterValue / 5
    local float3Value = float3()
    float3Value.x = sizeValue
    float3Value.y = sizeValue
    float3Value.z = sizeValue
    item.LocalSize = float3Value
end))
 ```