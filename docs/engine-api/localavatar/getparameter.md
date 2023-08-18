# GetParameter

The GetParameter function returns the value of a parameter as an object. You should know what type the Parameter is when getting it to be able to properly handle it.

::: caution

`Trigger` parameter types are not supported and will not be for GetParameter.

:::

**Parameters**

 Parameter Name | Parameter Type | Parameter Description
 --- | --- | ---
 parameterName | string | The name of the parameter to get the value of

 The following example gets a float parameter and sizes a GameObject in the avatar.

 **JavaScript**
 ```js
let item = LocalAvatar.GetAvatarObjectByPath("Hips/Spine/Neck/Head/Pet")
Runtime.OnUpdate(new SandboxFunc(engine).SetAction(() => {
    let parameterValue = LocalAvatar.GetParameter("petScale")
    // Assuming the pet is uniform scale
    let sizeValue = parameterValue / 5
    item.LocalSize = new float3(sizeValue, sizeValue, sizeValue)
}))
 ```

 **Lua**
 ```lua
local item = LocalAvatar.GetAvatarObjectByPath("Hips/Spine/Neck/Head/Pet")
Runtime.OnUpdate(SandboxFunc().SetAction(function ()
    local parameterValue = tonumber(LocalAvatar.GetParameter("petScale"))
    // Assuming the pet is uniform scale
    local sizeValue = parameterValue / 5
    local float3Value = float3()
    float3Value.x = sizeValue
    float3Value.y = sizeValue
    float3Value.z = sizeValue
    item.LocalSize = float3Value
end))
 ```