# GetAvatarObject

The GetAvatarObject method returns an Item from the LocalPlayer's Avatar. It needs the HumanBodyBones parameter to define which bone from a Humanoid to return.

:::note

+ Returns an [Item](../item) for **LocalAvatarScripts**
+ Returns a [ReadonlyItem](../readonlyitem) for **LocalScripts**

:::

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
humanBodyBone | [HumanBodyBones](../humanbodybones) | The HumanBodyBone to get from an Avatar

:::caution

The returned result of GetAvatarObject can be null!

:::

The following examples set the position of the Head bone to (0,0,0)

**JavaScript**
```js
let item = LocalAvatar.GetAvatarObject(HumanBodyBones.Head)
// item can be undefined!
if(item !== undefined)
    item.Position = new float3(0, 0, 0)
```

**Lua**
```lua
local item = LocalAvatar.GetAvatarObject(HumanBodyBones.Head)
if item ~= nil then
    item.Position = float3()
end
```