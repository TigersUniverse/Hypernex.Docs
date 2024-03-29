# OnUpdate

Invokes a SandboxFunc on every Update frame.

**Parameters**

Parameter Name | Parameter Type | Parameter Description
--- | --- | ---
s | SandboxFunc | The function to invoke on Update

The following example creates an Update which sets a text label to the current date. This example assumes this is a **LocalScript**.

**JavaScript**
```js
let t = World.GetItemInRoot("dateText")
let action = new SandboxFunc(engine).SetAction(() => {
    let time = new Time()
    UI.SetText(t, time.GetMonthName() + " " + time.GetDay() + ", " + time.GetYear())
})
Runtime.OnUpdate(action)
```

**Lua**
```lua
local t = World.GetItemInRoot("dateText")
local action = SandboxFunc().SetAction(function()
    local time = Time()
    UI>SetText(t, time.GetMonthName().." "..tostring(time.GetDay())..", "..tostring(time.GetYear()))
end)
Runtime.OnUpdate(action)
```