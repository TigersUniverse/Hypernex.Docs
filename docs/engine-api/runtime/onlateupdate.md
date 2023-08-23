# OnLateUpdate

Invokes a SandboxFunc on every LateUpdate frame.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
s | SandboxFunc | The function to invoke on LateUpdate

The following example rotates an Item (assuming LocalScript).

**JavaScript**
```js
let item = World.GetItemInRoot("cube")
let action = new SandboxFunc(engine).SetAction(() => {
    let yRot = item.Rotation.y
    yRot += 0.01
    if(yRot > 1)
        yRot = 0
    let newRot = new float4(item.Rotation.x, yRot, item.Rotation.z, item.Rotation.w)
    item.Rotation = newRot
})
Runtime.OnLateUpdate(action)
```

**Lua**
```lua
local item = World.GetItemInRoot("cube")
local action = SandboxFunc().SetAction(function()
    local yRot = item.Rotation.y
    yRot = yRot + 0.01
    if yRot > 1 then yRot = 0 end
    local newRot = float4()
    newRot.x = item.Rotation.x
    newRot.y = yRot
    newRot.z = item.Rotation.z
    newRot.w = item.Rotation.w
    item.Rotation = newRot
end)
Runtime.OnLateUpdate(action)
```